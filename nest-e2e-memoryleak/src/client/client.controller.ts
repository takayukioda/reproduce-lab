import { Controller, Get, Query } from '@nestjs/common';
import { ClientService } from './client.service';

class ListUserReq {
  constructor(readonly page: number = 1, readonly perPage: number = 20) {}
}

@Controller('clients')
export class ClientController {
  constructor(private readonly userService: ClientService) {}

  @Get('')
  listUsers(@Query() query: ListUserReq) {
    return this.userService.list({
      page: parseInt(`${query.page || 1}`),
      perPage: parseInt(`${query.perPage || 20}`),
    });
  }
}
