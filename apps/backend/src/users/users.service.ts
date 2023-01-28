import { Injectable } from '@nestjs/common';
import { PrismaService } from '@sharenergy/nest-helpers';

import { CreateUsersDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(
    username: CreateUsersDto['username'],
    password: CreateUsersDto['password']
  ): Promise<User> {
    return this.prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
  }

  findOne(username: CreateUsersDto['username']): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        username: username,
      },
    });
  }
}
