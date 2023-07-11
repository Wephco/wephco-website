export interface ICreateUser {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: string;
}

export interface ICreateUserResponse {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    role: string;
    createdAt: string;
}

export interface LoginResponse {
    name: string;
    email: string;
    phoneNumber: string;
    token: string
}

export const newUser: ICreateUser = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: ''
}