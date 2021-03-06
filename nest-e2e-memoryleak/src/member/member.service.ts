import { Injectable, Optional } from '@nestjs/common';
import * as raw from '../fake.json';

export interface Member {
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
export class MemberService {
  constructor(@Optional() private users: Member[]) {
    this.users = raw as any;
  }

  list({ page = 1, perPage = 20 }: ListUser) {
    const offset = (page - 1) * perPage;
    const limit = offset + perPage;
    return this.users.slice(offset, limit);
  }
}
