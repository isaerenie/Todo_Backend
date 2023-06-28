import {userConfig} from "../configs/axiosConfig";
import {RegisterDto} from "../models/dto/RegisterDto.ts";
import {LoginDto} from "../models/dto/LoginDto.ts";
import {IJwt} from "../models/IJwt.ts";
import {IUser} from "../models/IUser.ts";

//  State ve action type'larına göre state'i güncelle.
class UserApiService {
    register(Register: RegisterDto) {
        Register.enabled = true;
        Register.tokenExpired = true;
        Register.roles = [
            {id: 2, name: 'ROLE_User'}]

        return userConfig.post<IUser>("register", Register);
    }
    login(Login: LoginDto) {
        return userConfig.post<IJwt>("login", Login);
    }
}
export default UserApiService;


/*
export const userLogin = (username: string, password: string) => {
    const sendData = {
        username: username,
        password: password
    }
    return userConfig.post<IJwt>('user/auth', sendData)
}
export const userRegister = (firstName: string, lastName: string, email: string, password: string) => {
    const sendData = {
        firstName: firstName,
        lastName: lastName,
        email:email,
        password: password,
        enabled: true,
        tokenExpired: true,
        roles: [
            {id: 2, name: 'ROLE_customer'}]

    }
    return userConfig.post<IUser>('user/register', sendData)
}
*/




