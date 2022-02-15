import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Query() query: any) {
    return this.userService.getUsersService(query);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUserService(id);
  }

  @Put()
  async addUser(@Body() body: any) {
    return this.userService.addUserService(body);
  }

  @Post()
  async updateUser(@Body() body: any) {
    return this.userService.updateUserService(body);
  }

  @Delete()
  async deleteUser(@Query() query: any) {
    return this.userService.deleteUserService(query.id);
  }
}
