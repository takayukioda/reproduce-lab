import { Injectable, Optional } from '@nestjs/common';
import * as raw from '../fake.json';

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  uuid: string;
  avatar: string;
  domain: string;
}

interface ListUser {
  readonly page: number;
  readonly perPage: number;
}

@Injectable()
export class UserService {
  constructor(@Optional() private users: User[]) {
    this.users = raw as any;
  }

  list({ page = 1, perPage = 20 }: ListUser) {
    const offset = (page - 1) * perPage;
    const limit = offset + perPage;
    return this.users.slice(offset, limit);
  }
}
