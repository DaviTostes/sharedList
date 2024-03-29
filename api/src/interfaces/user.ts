export interface User {
    email: string,
    username: string,
    password: string
}

export interface ReadUserDTO {
    email: string,
    username: string
}

export interface UserLogin {
    email: string,
    password: string
}