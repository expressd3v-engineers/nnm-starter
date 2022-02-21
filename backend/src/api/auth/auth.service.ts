import { Injectable } from '@nestjs/common';
import { UserService } from '../../core/user/user.service';
import { RegisterDto } from './types/register.type';
import { decryptString } from '../../helper/bcrypt/bcrypt.helper';
import { IUser } from '../../core/user/schema/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByAttrService({ email: email });
    if (!user) {
      return null;
    }
    const passwordIsValid = decryptString(password, user.password);
    return passwordIsValid ? user : null;
  }

  async register(user: RegisterDto): Promise<any> {
    const userObj = await this.userService.addUserService(user);
    return this.login(userObj);
  }

  async login(user: IUser): Promise<{ user: IUser; access_token: string }> {
    const payload = {
      email: user.email,
      sub: user.password,
    };
    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
