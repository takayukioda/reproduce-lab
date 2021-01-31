import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

class ListUserReq {
  constructor(readonly page: number = 1, readonly perPage: number = 20) {}
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  listUsers(@Query() query: ListUserReq) {
    return this.userService.list({
      page: parseInt(`${query.page || 1}`),
      perPage: parseInt(`${query.perPage || 20}`),
    });
  }
}
