export interface RegisterResponse {
  msg: string;
  user: {
    name: string;
    email: string;
    password: string;
    age: number;
    phone: string;
    role: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
export interface LoginFormValues {
  email: string;
  password: string;
}
export interface LoginResponse {
  msg: string;
  token: string;
}
export interface CreateNoteData {
  title: string;
  content: string;
}
export interface CreateNoteResponse {
  msg: string;
  note: {
    _id: string;
    title: string;
    content: string;
    createdBy: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
  };
}
export interface Note {
  id: string; // backend gives _id as string, not number
  title: string;
  text: string;
}
