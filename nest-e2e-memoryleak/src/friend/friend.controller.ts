import { Controller, Get, Query } from '@nestjs/common';
import { FriendService } from './friend.service';

class ListUserReq {
  constructor(readonly page: number = 1, readonly perPage: number = 20) {}
}

@Controller('friends')
export class FriendController {
  constructor(private readonly userService: FriendService) {}

  @Get('')
  listUsers(@Query() query: ListUserReq) {
    return this.userService.list({
      page: parseInt(`${query.page || 1}`),
      perPage: parseInt(`${query.perPage || 20}`),
    });
  }
}
