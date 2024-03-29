export interface User {
    email: string,
    username: string,
    password: string
}

export interface UserLogin {
    email: string,
    password: string
}

export interface ReadUserDto {
    email: string,
    username: string
}