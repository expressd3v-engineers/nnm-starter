import { Injectable } from '@nestjs/common';
import { UserService } from '../../core/user/user.service';
import { IUser } from '../../core/user/schema/user.schema';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUserService(user): Promise<IUser> {
    return this.userService.addUserService(user);
  }
}
