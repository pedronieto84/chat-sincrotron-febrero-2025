import {LOAD_MESSAGES, LOAD_USERS_HALL, REGISTER, LOGIN, LOGOUT } from './actions'
import { User, Message, IStore } from '../types/globalTypes';



const initialState: IStore = {
    user: null,
    users: [],
    messages: []
}

// Defino los reducers para cada Action
const reducer = (state = initialState, action: { type: string, payload: User | User[] | Message[] }) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload as User
            }
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        case REGISTER:
            return {
                ...state,
                user: action.payload as User
            }
        case LOAD_USERS_HALL:
            return {
                ...state,
                users: action.payload as User[]
            }
        case LOAD_MESSAGES:
            return {
                ...state,
                messages: action.payload as Message[]
            }
        default:
            return state
    }
}