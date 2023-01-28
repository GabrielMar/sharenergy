import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Crie o registro do cliente' })
  @ApiBody({ type: Client })
  create(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Busque todos os clientes' })
  @ApiOkResponse({
    description: 'Registro encontrado',
    type: Client,
  })
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busque um cliente específico' })
  @ApiOkResponse({
    description: 'Registro encontrado',
    type: Client,
  })
  findOne(@Param('id') id: string): Promise<Client> {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualize o registro de um cliente específico' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateClientDto
  ): Promise<Client> {
    return this.clientsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclua o registro de um cliente específico' })
  remove(@Param('id') id: string): Promise<Client> {
    return this.clientsService.remove(id);
  }
}
