import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, collection, query, onSnapshot, setDoc, deleteDoc, getDocs, getDoc, where, Timestamp } from 'firebase/firestore';
import { Loader2, User, Users, Building2, Upload, Trash2, Download, Plus, AlertTriangle, Lock, LogIn, KeyRound } from 'lucide-react';

// src/App.jsx (Replace lines 9-11 with this block)

// --- FIREBASE CONFIGURATION & INITIALIZATION (CRITICAL: REPLACE WITH YOUR KEYS) ---
const firebaseConfig = {
    apiKey: "AIzaSyD-VNYm8yM4IMKwmY9mblN6e9xKUs", // <-- Your specific key
    authDomain: "admin-registration-system.firebaseapp.com",
    projectId: "admin-registration-system",
    storageBucket: "admin-registration-system.appspot.com",
    messagingSenderId: "606878229985",
    appId: "1:606878229985:web:0da8df13b9837cc2f1c8f8",
    measurementId: "G-WM64J45XXL" 
};

// We rely on anonymous sign-in in the standard environment, not a custom token.
const initialAuthToken = null; 
// Use the Project ID for the app ID scope in Firestore
const appId = firebaseConfig.projectId;

// HARDCODED SUPER ADMIN CREDENTIALS
const SUPER_ADMIN_USERNAME = 'admin';
const SUPER_ADMIN_PASSWORD = '12345678';

// Utility function for exponential backoff (Retry mechanism)
const withRetry = async (fn, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

// Utility function to convert Data to CSV
const convertToCSV = (data) => {
    if (!data || data.length === 0) return '';

    // Updated headers to reflect new student fields (Digital Literacy)
    const headers = [
        'id', 'name', 'digitalLiteracy', 'centerId', 'centerName', 'partnerId', 'partnerName', 'registrationDate', 'studentPictureBase64',
    ];
    const csvRows = [];

    // Add headers
    csvRows.push(headers.join(','));

    // Add data rows
    for (const row of data) {
        const values = headers.map(header => {
            let value = row[header];

            if (header === 'registrationDate' && value instanceof Timestamp) {
                value = value.toDate().toLocaleString();
            } else if (header === 'studentPictureBase64') {
                // Shorten base64 string for CSV readability
                value = value ? 'Image Stored (Base64)' : 'No Image';
            }

            // Sanitize string values (handle commas and quotes)
            if (typeof value === 'string') {
                value = value.replace(/"/g, '""'); // Escape double quotes
                if (value.includes(',') || value.includes('\n')) {
                    value = `"${value}"`; // Quote if contains comma or newline
                }
            }
            return value;
        });
        csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
};


// --- FIREBASE HOOK & SETUP ---
const useFirebase = () => {
    const [db, setDb] = useState(null);
    const [auth, setAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!firebaseConfig) {
            console.error("Firebase config is missing.");
            setIsLoading(false);
            return;
        }

        try {
            const app = initializeApp(firebaseConfig);
            const firestore = getFirestore(app);
            const authInstance = getAuth(app);

            setDb(firestore);
            setAuth(authInstance);

            const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
                // Ensure a user is signed in to enable Firestore security rules
                if (!user) {
                    try {
                        if (initialAuthToken) {
                            await signInWithCustomToken(authInstance, initialAuthToken);
                        } else {
                            await signInAnonymously(authInstance);
                        }
                    } catch (e) {
                        console.error("Error during authentication:", e);
                    }
                }
                setIsLoading(false);
            });

            return () => unsubscribe();
        } catch (error) {
            console.error("Firebase initialization failed:", error);
            setIsLoading(false);
        }
    }, []);

    return { db, auth, isLoading };
};

// --- FIRESTORE DATA HOOKS ---
const useCollectionData = (db, collectionName, authReady) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!db || !authReady) {
            if (!db) setLoading(false);
            return;
        }

        setLoading(true);

        // All data is public for this demo
        const colRef = collection(db, `artifacts/${appId}/public/data/${collectionName}`);
        const q = query(colRef);

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const list = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(list);
            setLoading(false);
        }, (error) => {
            console.error(`Error fetching ${collectionName}:`, error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [db, collectionName, authReady]);

    return { data, loading };
};


// --- UI COMPONENTS ---

const Card = ({ title, children, icon: Icon, className = '' }) => (
    <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl ${className}`}>
        <div className="flex items-center space-x-3 mb-4 border-b pb-3">
            {Icon && <Icon className="w-6 h-6 text-indigo-600" />}
            <h2 className="text-2xl font-extrabold text-gray-800">{title}</h2>
        </div>
        {children}
    </div>
);

const Button = ({ children, onClick, disabled, primary, className = '', icon: Icon, ...props }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
            flex items-center justify-center space-x-2 px-4 py-2 font-semibold rounded-lg transition-all duration-200
            ${primary ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98]'}
            ${className}
        `}
        {...props}
    >
        {Icon && <Icon className="w-5 h-5" />}
        <span>{children}</span>
    </button>
);

const Input = ({ label, type = 'text', value, onChange, placeholder, required = false, className = '' }) => (
    <div className={`space-y-1 ${className}`}>
        <label className="block text-sm font-medium text-gray-700">{label}{required && <span className="text-red-500">*</span>}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-150"
        />
    </div>
);

// --- AUTHENTICATION PAGE ---
const AuthPage = ({ db, authReady, onLogin, partners, centers }) => {
    const [tab, setTab] = useState('super_admin'); // 'super_admin', 'partner', 'center_user'
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = useCallback(async (e) => {
        e.preventDefault();
        if (!authReady) return;
        
        setIsSubmitting(true);
        setMessage('');

        try {
            if (tab === 'super_admin') {
                if (id === SUPER_ADMIN_USERNAME && password === SUPER_ADMIN_PASSWORD) {
                    onLogin({ role: 'SUPER_ADMIN', id: SUPER_ADMIN_USERNAME, name: 'Super Administrator' });
                } else {
                    setMessage('Invalid Super Admin credentials.');
                }
            } else if (tab === 'partner') {
                const partner = partners.find(p => p.id === id);
                if (partner && partner.password === password) {
                    onLogin({ role: 'PARTNER', id: partner.id, name: partner.name });
                } else {
                    setMessage('Invalid Partner ID or Password.');
                }
            } else if (tab === 'center_user') {
                const center = centers.find(c => c.id === id);
                if (center && center.password === password) {
                    onLogin({ role: 'CENTER_USER', id: center.id, name: center.name, partnerId: center.partnerId });
                } else {
                    setMessage('Invalid Center ID or Password.');
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            setMessage('An unexpected error occurred during login.');
        } finally {
            setIsSubmitting(false);
        }
    }, [tab, id, password, authReady, onLogin, partners, centers]);

    const tabClasses = (currentTab) => 
        `px-4 py-2 font-semibold transition-colors duration-200 rounded-t-lg ${
            tab === currentTab ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`;

    return (
        <div className="max-w-md mx-auto mt-10">
            <Card title="Role Login" icon={LogIn}>
                <div className="mb-4 flex border-b border-gray-200">
                    <button onClick={() => { setTab('super_admin'); setMessage(''); setId(''); setPassword(''); }} className={tabClasses('super_admin')}>
                        Super Admin
                    </button>
                    <button onClick={() => { setTab('partner'); setMessage(''); setId(''); setPassword(''); }} className={tabClasses('partner')}>
                        Partner
                    </button>
                    <button onClick={() => { setTab('center_user'); setMessage(''); setId(''); setPassword(''); }} className={tabClasses('center_user')}>
                        Center User
                    </button>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800 mb-6">
                    <AlertTriangle className="w-4 h-4 inline mr-2" /> 
                    **DEMO WARNING:** Credentials and roles are managed client-side and passwords are *unencrypted* in the database. **Do NOT use this structure in production.**
                </div>

                {message && (
                    <div className={`p-3 mb-4 rounded-lg text-sm ${message.startsWith('Invalid') || message.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <Input
                        label={tab === 'super_admin' ? 'Username' : `${tab.replace('_', ' ')} ID`}
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder={tab === 'super_admin' ? 'admin' : 'P_... or C_...'}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <Button
                        type="submit"
                        primary
                        disabled={isSubmitting || !id || !password}
                        icon={isSubmitting ? Loader2 : KeyRound}
                        className="w-full"
                    >
                        {isSubmitting ? 'Logging In...' : 'Log In'}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

// --- ADMIN MANAGEMENT VIEW (SUPER ADMIN) ---

const AdminManagement = ({ db, authReady, partners, centers, students, partnersLoading, centersLoading }) => {
    const [newPartnerId, setNewPartnerId] = useState('');
    const [newPartnerName, setNewPartnerName] = useState('');
    const [newPartnerPassword, setNewPartnerPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const partnerColRef = collection(db, `artifacts/${appId}/public/data/partners`);
    const centerColRef = collection(db, `artifacts/${appId}/public/data/centers`);

    // --- CRUD Operations ---

    const createPartner = useCallback(async () => {
        if (!newPartnerId || !newPartnerName || !newPartnerPassword || !authReady) return;

        setIsSubmitting(true);
        setMessage('');

        try {
            await withRetry(async () => {
                // Check if ID already exists (Partner ID is document ID)
                const docSnap = await getDoc(doc(partnerColRef, newPartnerId));
                if (docSnap.exists()) {
                    throw new Error(`Partner ID "${newPartnerId}" already exists.`);
                }

                await setDoc(doc(partnerColRef, newPartnerId), {
                    name: newPartnerName,
                    password: newPartnerPassword, // <-- DEMO: Stored unencrypted
                    createdAt: Timestamp.now(),
                });
            });
            setMessage(`Success: Partner "${newPartnerName}" created with ID: ${newPartnerId}.`);
            setNewPartnerId('');
            setNewPartnerName('');
            setNewPartnerPassword('');
        } catch (error) {
            console.error("Error creating partner:", error);
            setMessage(`Error: Failed to create partner. ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }, [newPartnerId, newPartnerName, newPartnerPassword, partnerColRef, authReady]);

    const deletePartner = useCallback(async (partnerId, partnerName) => {
        if (!authReady || !window.confirm(`Are you sure you want to DELETE Partner: ${partnerName} (ID: ${partnerId})? This will also remove all linked Centers and Students!`)) return;

        setIsSubmitting(true);
        setMessage('');

        try {
            await withRetry(async () => {
                // 1. Delete associated centers
                const centersQuery = query(centerColRef, where('partnerId', '==', partnerId));
                const centerDocs = await getDocs(centersQuery);
                centerDocs.forEach(async (d) => {
                    await deleteDoc(d.ref);
                });

                // 2. Delete partner document
                await deleteDoc(doc(partnerColRef, partnerId));

                // NOTE: Student cleanup is omitted here for simplicity but would be necessary in a real app.
            });
            setMessage(`Success: Partner "${partnerName}" and associated centers deleted.`);
        } catch (error) {
            console.error("Error deleting partner:", error);
            setMessage(`Error: Failed to delete partner. ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }, [partnerColRef, centerColRef, authReady]);

    const deleteCenter = useCallback(async (centerId, centerName) => {
        if (!authReady || !window.confirm(`Are you sure you want to DELETE Center: ${centerName} (ID: ${centerId})? This will orphan all linked Students!`)) return;

        setIsSubmitting(true);
        setMessage('');

        try {
            await withRetry(async () => {
                await deleteDoc(doc(centerColRef, centerId));
            });
            setMessage(`Success: Center "${centerName}" deleted.`);
        } catch (error) {
            console.error("Error deleting center:", error);
            setMessage(`Error: Failed to delete center. ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }, [centerColRef, authReady]);


    // --- Data Download ---

    const downloadStudentData = useCallback(() => {
        if (students.length === 0) {
            setMessage("No student data available to download.");
            return;
        }

        const flattenedData = students.map(s => ({
            id: s.id,
            name: s.name,
            digitalLiteracy: s.digitalLiteracy,
            centerId: s.centerId,
            centerName: centers.find(c => c.id === s.centerId)?.name || 'N/A',
            partnerId: centers.find(c => c.id === s.centerId)?.partnerId || 'N/A',
            partnerName: partners.find(p => p.id === centers.find(c => c.id === s.centerId)?.partnerId)?.name || 'N/A',
            registrationDate: s.registrationDate,
            studentPictureBase64: s.studentPictureBase64,
        }));

        const csvString = convertToCSV(flattenedData);
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `student_data_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setMessage(`Success: Downloaded ${students.length} student records.`);
    }, [students, partners, centers]);


    // --- Render ---

    return (
        <div className="space-y-8 p-4">
            <h1 className="text-3xl font-black text-indigo-700">Super Admin Dashboard</h1>

            {message && (
                <div className={`p-4 rounded-lg text-sm ${message.startsWith('Error') || message.startsWith('Partner ID') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message}
                </div>
            )}

            {/* --- Partner Management --- */}
            <Card title="Manage Partners (ID & Credentials)" icon={Users}>
                <p className="text-sm text-red-500 mb-4 font-semibold">Super Admin is responsible for setting Partner IDs and Passwords.</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Input
                        label="Partner ID (Username)"
                        value={newPartnerId}
                        onChange={(e) => setNewPartnerId(e.target.value)}
                        placeholder="P_GLOBAL_EAST"
                        required
                    />
                    <Input
                        label="Partner Name"
                        value={newPartnerName}
                        onChange={(e) => setNewPartnerName(e.target.value)}
                        placeholder="Global East Operations"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={newPartnerPassword}
                        onChange={(e) => setNewPartnerPassword(e.target.value)}
                        placeholder="Set password"
                        required
                    />
                    <Button
                        primary
                        onClick={createPartner}
                        disabled={isSubmitting || !newPartnerId || !newPartnerName || !newPartnerPassword}
                        icon={Plus}
                        className="md:self-end h-[42px] mt-1"
                    >
                        Create Partner
                    </Button>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Existing Partners ({partners.length})</h3>
                {partnersLoading ? (
                    <div className="flex items-center justify-center p-4 text-indigo-600"><Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading Partners...</div>
                ) : partners.length === 0 ? (
                    <p className="text-gray-500 italic">No partners found. Create one above.</p>
                ) : (
                    <div className="space-y-3">
                        {partners.map(p => (
                            <div key={p.id} className="flex flex-wrap justify-between items-center p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                                <div>
                                    <p className="font-bold text-gray-800">{p.name}</p>
                                    <p className="text-xs text-indigo-600 font-mono">ID: {p.id}</p>
                                    <p className="text-xs text-gray-500">Pass: {p.password || '[Hidden]'}</p>
                                </div>
                                <Button
                                    onClick={() => deletePartner(p.id, p.name)}
                                    disabled={isSubmitting}
                                    className="bg-red-500 text-white hover:bg-red-600"
                                    icon={Trash2}
                                >
                                    Delete Partner
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </Card>

            {/* --- Center Management (Super Admin can delete, but partners create) --- */}
            <Card title="Manage Centers (Deletion Only)" icon={Building2}>
                <p className="text-sm text-gray-600 mb-4">Centers are created by logged-in Partners. Super Admin can delete them here.</p>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Existing Centers ({centers.length})</h3>
                {centersLoading ? (
                    <div className="flex items-center justify-center p-4 text-indigo-600"><Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading Centers...</div>
                ) : centers.length === 0 ? (
                    <p className="text-gray-500 italic">No centers found.</p>
                ) : (
                    <div className="space-y-3">
                        {centers.map(c => (
                            <div key={c.id} className="flex flex-wrap justify-between items-center p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                                <div>
                                    <p className="font-bold text-gray-800">{c.name}</p>
                                    <p className="text-xs text-indigo-600 font-mono">ID: {c.id} | Partner: {c.partnerId}</p>
                                    <p className="text-xs text-gray-500">Pass: {c.password || '[Hidden]'}</p>
                                </div>
                                <Button
                                    onClick={() => deleteCenter(c.id, c.name)}
                                    disabled={isSubmitting}
                                    className="bg-red-500 text-white hover:bg-red-600"
                                    icon={Trash2}
                                >
                                    Delete Center
                                </Button>
                            </div>
                        ))}
                    </div>
                )}
            </Card>


            {/* --- Data Download --- */}
            <Card title="Data Download" icon={Download}>
                <p className="text-gray-600 mb-4">Download all student registration data in CSV format (compatible with Excel).</p>
                <div className="flex items-center justify-between">
                    <p className="font-mono text-sm text-gray-700">{students.length} Total Student Records</p>
                    <Button
                        primary
                        onClick={downloadStudentData}
                        disabled={students.length === 0}
                        icon={Download}
                    >
                        Download All Student Data (.csv)
                    </Button>
                </div>
            </Card>

        </div>
    );
};

// --- PARTNER DASHBOARD VIEW ---

const PartnerDashboard = ({ db, authReady, user, centers, centersLoading }) => {
    const [newCenterId, setNewCenterId] = useState('');
    const [newCenterName, setNewCenterName] = useState('');
    const [newCenterPassword, setNewCenterPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const centerColRef = collection(db, `artifacts/${appId}/public/data/centers`);

    const partnerCenters = centers.filter(c => c.partnerId === user.id);

    const createCenter = useCallback(async () => {
        if (!newCenterId || !newCenterName || !newCenterPassword || !authReady) return;

        setIsSubmitting(true);
        setMessage('');

        try {
            await withRetry(async () => {
                // Check if ID already exists (Center ID is document ID)
                const docSnap = await getDoc(doc(centerColRef, newCenterId));
                if (docSnap.exists()) {
                    throw new Error(`Center ID "${newCenterId}" already exists.`);
                }

                await setDoc(doc(centerColRef, newCenterId), {
                    name: newCenterName,
                    partnerId: user.id,
                    password: newCenterPassword, // <-- DEMO: Stored unencrypted
                    createdAt: Timestamp.now(),
                });
            });
            setMessage(`Success: Center "${newCenterName}" created with ID: ${newCenterId}.`);
            setNewCenterId('');
            setNewCenterName('');
            setNewCenterPassword('');
        } catch (error) {
            console.error("Error creating center:", error);
            setMessage(`Error: Failed to create center. ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }, [newCenterId, newCenterName, newCenterPassword, centerColRef, authReady, user.id]);

    return (
        <div className="space-y-8 p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-black text-indigo-700">Partner Dashboard: {user.name}</h1>
            <p className="text-gray-600">Partner ID: <code className="font-mono bg-gray-200 p-1 rounded">{user.id}</code></p>

            {message && (
                <div className={`p-4 rounded-lg text-sm ${message.startsWith('Error') || message.startsWith('Center ID') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message}
                </div>
            )}

            {/* --- Center Creation --- */}
            <Card title="Create Center ID & Credentials" icon={Building2}>
                <p className="text-sm text-red-500 mb-4 font-semibold">You are setting the ID and Password for Center Users to log in.</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <Input
                        label="Center ID (Username)"
                        value={newCenterId}
                        onChange={(e) => setNewCenterId(e.target.value)}
                        placeholder="C_MUMBAI_01"
                        required
                    />
                    <Input
                        label="Center Name"
                        value={newCenterName}
                        onChange={(e) => setNewCenterName(e.target.value)}
                        placeholder="Mumbai Branch 1"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={newCenterPassword}
                        onChange={(e) => setNewCenterPassword(e.target.value)}
                        placeholder="Set password"
                        required
                    />
                    <Button
                        primary
                        onClick={createCenter}
                        disabled={isSubmitting || !newCenterId || !newCenterName || !newCenterPassword}
                        icon={Plus}
                        className="md:self-end h-[42px] mt-1"
                    >
                        Create Center
                    </Button>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Your Centers ({partnerCenters.length})</h3>
                {centersLoading ? (
                    <div className="flex items-center justify-center p-4 text-indigo-600"><Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading Centers...</div>
                ) : partnerCenters.length === 0 ? (
                    <p className="text-gray-500 italic">You have not created any centers yet.</p>
                ) : (
                    <div className="space-y-3">
                        {partnerCenters.map(c => (
                            <div key={c.id} className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                                <p className="font-bold text-gray-800">{c.name}</p>
                                <p className="text-xs text-indigo-600 font-mono">ID: {c.id}</p>
                                <p className="text-xs text-gray-500">Pass: {c.password || '[Hidden]'}</p>
                            </div>
                        ))}
                    </div>
                )}
            </Card>
        </div>
    );
};


// --- CENTER USER VIEW (STUDENT REGISTRATION) ---

const CenterRegistration = ({ db, authReady, user }) => {
    const [name, setName] = useState('');
    const [digitalLiteracy, setDigitalLiteracy] = useState('');
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const studentColRef = collection(db, `artifacts/${appId}/public/data/students`);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size > 1024 * 1024) { // 1MB limit
            setMessage('Error: File size must be less than 1MB.');
            setFile(null);
        } else {
            setFile(selectedFile);
        }
    };

    const registerStudent = useCallback(async (e) => {
        e.preventDefault();
        if (!name || !digitalLiteracy || !authReady) {
            setMessage('Error: Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        try {
            let imageBase64 = null;
            if (file) {
                // Read file as base64 (since we don't have Firebase Storage)
                const reader = new FileReader();
                reader.readAsDataURL(file);
                await new Promise((resolve) => {
                    reader.onloadend = () => {
                        imageBase64 = reader.result;
                        resolve();
                    };
                });
            }

            await withRetry(async () => {
                const newStudent = {
                    name,
                    digitalLiteracy, // New field
                    centerId: user.id, // Automatically use logged-in Center ID
                    registrationDate: Timestamp.now(),
                    studentPictureBase64: imageBase64,
                };

                await setDoc(doc(studentColRef, `STUDENT_${Date.now()}`), newStudent);
            });

            setMessage('Success: Student registered successfully!');
            setName('');
            setDigitalLiteracy('');
            setFile(null);
            document.getElementById('student-pic').value = ''; // Reset file input

        } catch (error) {
            console.error("Error registering student:", error);
            setMessage(`Error: Failed to register student. ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }, [name, digitalLiteracy, file, studentColRef, authReady, user.id]);


    return (
        <Card title="Student Registration" icon={Upload} className="max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Center: {user.name} (<code className="font-mono text-sm text-indigo-600">{user.id}</code>)</h2>
            <p className="text-sm text-gray-500 mb-4">Register a new student for your center.</p>

            {message && (
                <div className={`p-3 mb-4 rounded-lg text-sm ${message.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {message}
                </div>
            )}

            <form onSubmit={registerStudent} className="space-y-4">
                <Input
                    label="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    required
                />
                <div className='space-y-1'>
                    <label className="block text-sm font-medium text-gray-700">Digital Literacy Level<span className="text-red-500">*</span></label>
                    <select
                        value={digitalLiteracy}
                        onChange={(e) => setDigitalLiteracy(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-150 h-[42px]"
                        required
                    >
                        <option value="">Select Level</option>
                        <option value="Basic">Basic</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Student Picture (Max 1MB)</label>
                    <input
                        type="file"
                        id="student-pic"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                    {file && <p className="text-xs text-gray-500 mt-1">Selected: {file.name}</p>}
                </div>

                <Button
                    type="submit"
                    primary
                    disabled={isSubmitting}
                    icon={Upload}
                    className="w-full"
                >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Register Student'}
                </Button>
            </form>
        </Card>
    );
};


// --- MAIN APPLICATION ---

const App = () => {
    const { db, isLoading } = useFirebase();
    const [user, setUser] = useState({ role: 'NONE', id: null, name: null });

    const authReady = !isLoading && !!db;

    // Fetch data for all roles to be used by the Admin/Registration pages
    const { data: partners, loading: partnersLoading } = useCollectionData(db, 'partners', authReady);
    const { data: centers, loading: centersLoading } = useCollectionData(db, 'centers', authReady);
    const { data: students, loading: studentsLoading } = useCollectionData(db, 'students', authReady);

    const handleLogout = useCallback(() => {
        // Simple client-side logout
        setUser({ role: 'NONE', id: null, name: null });
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mr-3" />
                <p className="text-xl font-medium text-gray-700">Connecting to Database...</p>
            </div>
        );
    }

    const currentUserId = user.id || 'N/A';

    // Main application container
    return (
        <div className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
            <header className="mb-8 p-4 bg-indigo-50 rounded-xl shadow-inner border border-indigo-200">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <User className="w-5 h-5 text-indigo-700" />
                        <span className="text-sm font-semibold text-gray-700">
                            Current Role: <span className="text-indigo-700 font-bold">{user.role.replace('_', ' ')}</span>
                            {user.name && <span className="text-xs text-gray-500 ml-2">({user.name})</span>}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <code className="text-xs font-mono bg-white p-1 rounded text-gray-800 border border-gray-300 shadow-sm">User ID: {currentUserId}</code>
                        {user.role !== 'NONE' && (
                            <Button onClick={handleLogout} className="text-sm bg-red-100 text-red-600 hover:bg-red-200" icon={Lock}>
                                Logout
                            </Button>
                        )}
                    </div>
                </div>
            </header>


            {user.role === 'NONE' && (
                <AuthPage
                    db={db}
                    authReady={authReady}
                    onLogin={setUser}
                    partners={partners}
                    centers={centers}
                />
            )}

            {user.role === 'SUPER_ADMIN' && (
                <AdminManagement
                    db={db}
                    authReady={authReady}
                    partners={partners}
                    centers={centers}
                    students={students}
                    partnersLoading={partnersLoading}
                    centersLoading={centersLoading}
                />
            )}

            {user.role === 'PARTNER' && (
                <PartnerDashboard
                    db={db}
                    authReady={authReady}
                    user={user}
                    centers={centers}
                    centersLoading={centersLoading}
                />
            )}

            {user.role === 'CENTER_USER' && (
                <CenterRegistration
                    db={db}
                    authReady={authReady}
                    user={user}
                />
            )}

            {/* Optional: Simple Footer for loading status */}
            {(partnersLoading || centersLoading || studentsLoading) && (
                <div className="fixed bottom-0 left-0 right-0 p-2 bg-indigo-600 text-white text-center text-sm">
                    <Loader2 className="w-4 h-4 inline animate-spin mr-2" />
                    Syncing data in real-time...
                </div>
            )}
        </div>
    );
};

export default App;
