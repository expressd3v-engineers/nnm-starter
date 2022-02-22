import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  async api() {
    return 'Server is running';
  }
}
