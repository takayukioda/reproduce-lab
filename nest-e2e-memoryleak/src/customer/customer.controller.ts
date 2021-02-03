import { Controller, Get, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';

class ListUserReq {
  constructor(readonly page: number = 1, readonly perPage: number = 20) {}
}

@Controller('customers')
export class CustomerController {
  constructor(private readonly userService: CustomerService) {}

  @Get('')
  listUsers(@Query() query: ListUserReq) {
    return this.userService.list({
      page: parseInt(`${query.page || 1}`),
      perPage: parseInt(`${query.perPage || 20}`),
    });
  }
}
