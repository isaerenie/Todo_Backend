
export interface RegisterDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword:string;
    enabled: boolean;
    tokenExpired: boolean;
    roles: [
        {id: number, name: string}
    ]
}
