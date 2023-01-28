import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUsersDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Crie o registro do usuário' })
  @ApiBody({ type: User })
  async create(@Body() dto: CreateUsersDto): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds);

    return this.usersService.create(dto.username, hashedPassword);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Busque as informações do usuário' })
  async getProfile(@Request() req) {
    return req.user;
  }
}
