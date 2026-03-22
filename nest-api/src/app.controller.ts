import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  ping(): string {
    return 'pong';
  }

  @Get('/user/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.appService.getUser(Number(id));
    if (!user) throw new NotFoundException();
    return user;
  }

  @Get('/feed')
  async getFeed() {
    return this.appService.getFeed();
  }
}
