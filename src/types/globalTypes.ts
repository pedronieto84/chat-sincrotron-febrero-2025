export type FormType = 'login' | 'register';

export interface FormValues {
  email: string;
  password: string;
}

export type User ={
  email?: string;
  id: string;
}

export type Message = {date?:number,sender:string, text:string}


export type handleMessageFunction = (message:Message) => void;


export type Store = {
  user: User | null;
}

export interface IStore {
  user: User | null
  users: User[]
  messages: Message[]

}