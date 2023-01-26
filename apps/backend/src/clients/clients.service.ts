import { Injectable } from '@nestjs/common';
import { PrismaService } from '@sharenergy/nest-helpers';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateClientDto): Promise<Client> {
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
    });

    return client;
  }

  async findAll(): Promise<Client[]> {
    const client = await this.prisma.client.findMany();

    return client;
  }

  async findOne(id: string): Promise<Client> {
    const client = await this.prisma.client.findFirst({
      where: {
        id: id,
      },
    });

    return client;
  }

  async update(id: string, dto: UpdateClientDto): Promise<Client> {
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
    });

    return client;
  }

  async remove(id: string): Promise<Client> {
    const client = await this.prisma.client.delete({
      where: {
        id: id,
      },
    });

    return client;
  }
}
