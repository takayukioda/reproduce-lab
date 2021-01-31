import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client';
import { CustomerModule } from './customer';
import { FriendModule } from './friend';
import { MemberModule } from './member';
import { UserModule } from './user';

@Module({
  imports: [
    UserModule,
    ClientModule,
    CustomerModule,
    FriendModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
