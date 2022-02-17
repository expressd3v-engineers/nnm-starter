import {
  Body,
  Controller,
  Put,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Put()
  async registerUser(@Body() body: any) {
    return this.authService.registerUserService({
      ...body,
    });
  }
}
