import { Module } from '@nestjs/common';
import { PrismaService } from '@sharenergy/nest-helpers';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
