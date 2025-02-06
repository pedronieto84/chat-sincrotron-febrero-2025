export type FormType = 'login' | 'register';

export interface FormValues {
  email: string;
  password: string;
}

export type User ={
  email?: string;
  id: string;
}