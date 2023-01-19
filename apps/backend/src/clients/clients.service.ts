import { Injectable } from '@nestjs/common';
import { PrismaService } from '@sharenergy/nest-helpers';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateClientDto) {
    const client = await this.prisma.client.create({
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        cpf: dto.cpf,
        country: dto.country,
        state: dto.state,
        city: dto.city,
        district: dto.district,
        address: dto.address,
        complement: dto.complement,
        number: dto.number,
        cep: dto.cep,
      },
      select: {
        id: true,
      },
    });

    return { ok: !!client.id };
  }

  async findAll() {
    const client = await this.prisma.client.findMany();

    return client;
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findFirst({
      where: {
        id: id,
      },
    });

    return client;
  }

  async update(id: string, dto: UpdateClientDto) {
    const client = await this.prisma.client.update({
      where: {
        id: id,
      },
      data: {
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        cpf: dto.cpf,
        country: dto.country,
        state: dto.state,
        city: dto.city,
        district: dto.district,
        address: dto.address,
        complement: dto.complement,
        number: dto.number,
        cep: dto.cep,
      },
      select: {
        id: true,
      },
    });

    return { ok: !!client.id };
  }

  async remove(id: string) {
    const client = await this.prisma.client.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
      },
    });

    return { ok: !!client.id };
  }
}
