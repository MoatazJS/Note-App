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
