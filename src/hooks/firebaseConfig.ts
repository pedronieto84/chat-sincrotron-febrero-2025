// Importa Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (Reemplaza con tus credenciales de Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyAeaV0NxwVivpQ2JHC1mOq_U3IZ23-LUgE",
    authDomain: "chat-sincrotron-febrero-2025.firebaseapp.com",
    projectId: "chat-sincrotron-febrero-2025",
    storageBucket: "chat-sincrotron-febrero-2025.firebasestorage.app",
    messagingSenderId: "36942582415",
    appId: "1:36942582415:web:b09b3bc05756139d4596fa"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa módulos específicos
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta las instancias para usarlas en la app
export { auth, db };