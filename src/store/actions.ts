import {User, Message} from './../types/globalTypes';

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
export const login = (user:User) => ({ type: LOGIN, payload: user });
export const logout = () => ({ type: LOGOUT });
// Defino los tipos de las acciones de REGISTER PAGE
export const register = (user: User) => ({ type: REGISTER, payload: user });
// Defino los tipos de las acciones de HALL
export const loadUsersHall = (payload: User[]) => ({ type: LOAD_USERS_HALL, payload });
// Defino los tipos de las acciones de CHAT
export const loadMessages = (payload: Message[]) => ({ type: LOAD_MESSAGES, payload });




