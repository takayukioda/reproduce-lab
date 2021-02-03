import { Controller, Get, Query } from '@nestjs/common';
import { MemberService as MemberService } from './member.service';

class ListUserReq {
  constructor(readonly page: number = 1, readonly perPage: number = 20) {}
}

@Controller('members')
export class MemberController {
  constructor(private readonly userService: MemberService) {}

  @Get('')
  listUsers(@Query() query: ListUserReq) {
    return this.userService.list({
      page: parseInt(`${query.page || 1}`),
      perPage: parseInt(`${query.perPage || 20}`),
    });
  }
}
