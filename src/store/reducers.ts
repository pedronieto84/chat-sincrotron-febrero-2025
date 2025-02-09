import {LOAD_MESSAGES, LOAD_USERS_HALL, REGISTER, LOGIN, LOGOUT } from './actions'
import { User, Message, IStore } from '../types/globalTypes';



const initialState: IStore = {
    user: null,
    users: [],
    messages: []
}

