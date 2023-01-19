import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [AuthModule, UsersModule, ClientsModule],
})
export class AppModule {}
