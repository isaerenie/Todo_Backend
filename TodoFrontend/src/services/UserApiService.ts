import {userConfig} from "../configs/axiosConfig";
import {RegisterDto} from "../models/dto/RegisterDto.ts";
import {LoginDto} from "../models/dto/LoginDto.ts";
import {IJwt} from "../models/IJwt.ts";
import {IUser} from "../models/IUser.ts";

class UserApiService {
    // REGISTER
    register(Register: RegisterDto) {
        Register.enabled = true;
        Register.tokenExpired = true;
        Register.roles = [
            {id: 2, name: 'ROLE_User'}]

        return userConfig.post<IUser>("register", Register);
    }

    // LOGIN
    login(Login: LoginDto) {
        return userConfig.post<IJwt>("login", Login);
    }

    // FIND BY EMAIL
    findByEmail(email: string) {
        console.log(email);
        return userConfig.get<IUser>(`find/${email}`);
    }
}
export default UserApiService;


