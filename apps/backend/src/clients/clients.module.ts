import { Module } from '@nestjs/common';
import { PrismaService } from '@sharenergy/nest-helpers';

import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, PrismaService],
})
export class ClientsModule {}
