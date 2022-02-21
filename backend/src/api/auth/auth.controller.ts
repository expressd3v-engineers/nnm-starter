import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './types/register.type';
import { LocalAuthGuard } from './guards/local.guard';
import { IUser } from '../../core/user/schema/user.schema';
import { RealIP } from 'nestjs-real-ip';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() register: RegisterDto, @RealIP() ip: string) {
    console.log(ip);
    return this.authService.register(register);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any, @RealIP() ip: string) {
    console.log(ip);
    return this.authService.login(req.user as IUser);
  }
}
