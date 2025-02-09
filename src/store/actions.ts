import { User, Message } from './../types/globalTypes';
import { auth, db } from '../hooks/firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";
import { Dispatch } from 'redux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Defino las acciones de LOGIN PAGE
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
// Acciones de REGISTER PAGE
export const REGISTER = 'REGISTER';
// Acciones de HALL
export const LOAD_USERS_HALL = 'LOAD_USERS_HALL';
// Acciones de CHAT
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
/////////////////////////////////////////////////////////

// Defino los tipos de las acciones de LOGIN PAGE
export const login = (user: User) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT });
// Defino los tipos de las acciones de REGISTER PAGE
export const register = (user: User) => ({ type: REGISTER, payload: user });
// Defino los tipos de las acciones de HALL
export const loadUsersHall = (payload: User[]) => ({ type: LOAD_USERS_HALL, payload });
// Defino los tipos de las acciones de CHAT
export const loadMessages = (payload: Message[]) => ({ type: LOAD_MESSAGES, payload });

// DEFINO ACCIONES ASINCRONAS

export const logoutAsync = () => {
    return async (dispatch: Dispatch) => {
        try {
            await auth.signOut();
            dispatch(logout());
        } catch (e) {
            console.error(e);
        }
    }
}

export const loginAsync = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const authUser = await signInWithEmailAndPassword(auth, email, password);
            const user: User = { email, id: authUser.user.uid };
            dispatch(login(user));
            return user
        } catch (e) {
            console.error(e);
        }
    }
}


export const createUserAsync = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
        try {
            // Crear el usuario con Firebase Auth
            const userRegistered = await createUserWithEmailAndPassword(auth, email, password);

            // Crear el objeto que se va a insertar
            const user: User = { id: userRegistered.user.uid, email: userRegistered.user.email as string };

            // Insertar el objeto en la BBDD
            await setDoc(doc(db, "users", user.id), {
                email: user.email,
                id: user.id,
            });

            // Despachar la acción REGISTER
            dispatch(register(user));

            return user;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    };
};

// DEFINO ACCIONES DE TIPO OBSERVABLE
export const fetchUsersObservable = () => {
    // Defino la colección de usuarios
    const usersCollection = collection(db, "users");

    // Tengo que hacerlo así porque de esto se encarga thunk, el parametro me lo pasa en 
    // el middleware
    return (dispatch: Dispatch) => {
        const subscription = onSnapshot(usersCollection, (snapshot) => {
            const usersData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            const quitoMiUsuario = usersData.filter((user) => user.id !== auth.currentUser?.uid);
            console.log('quito miusuario', quitoMiUsuario);
            dispatch(loadUsersHall(quitoMiUsuario));
        });

        return () => subscription()
    }
}




