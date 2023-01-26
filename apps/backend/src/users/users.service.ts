import { Injectable } from '@nestjs/common';
import { PrismaService } from '@sharenergy/nest-helpers';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { cryptConstants } from '../auth/constants';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<Partial<User>> {
    const password = await bcrypt.hash(dto.password, cryptConstants.saltRounds);

    const client = await this.prisma.user.create({
      data: {
        username: dto.username,
        password: password,
      },
      select: {
        username: true,
      },
    });

    return client;
  }

  async findOne(username: string): Promise<User> {
    const client = await this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    return client;
  }
}
