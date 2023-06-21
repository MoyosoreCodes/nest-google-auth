import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }
}
