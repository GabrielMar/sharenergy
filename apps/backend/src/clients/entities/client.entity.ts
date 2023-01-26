import { ApiProperty } from '@nestjs/swagger';

export class Client {
  @ApiProperty({ example: 'Marcos Calebe', description: 'Nome' })
  name: string;

  @ApiProperty({
    example: 'marcoscalebedapaz@outlook.com',
    description: 'E-mail',
  })
  email: string;

  @ApiProperty({ example: '8629930873', description: 'Telefone' })
  phone: string;

  @ApiProperty({ example: '07480410018', description: 'CPF' })
  cpf: string;

  @ApiProperty({ example: 'Brasil', description: 'País' })
  country: string;

  @ApiProperty({ example: 'Roraima', description: 'Estado' })
  state: string;

  @ApiProperty({ example: 'Boa Vista', description: 'Cidade' })
  city: string;

  @ApiProperty({ example: 'Pricumã', description: 'Bairro' })
  district: string;

  @ApiProperty({ example: 'Alameda dos Bambus', description: 'Endereço' })
  address: string;

  @ApiProperty({
    example: 'Apartamento 12',
    description: 'Complemento do endereço',
  })
  complement: string;

  @ApiProperty({ example: '236', description: 'Número do endereço' })
  number: string;

  @ApiProperty({ example: '64204060', description: 'CEP do endereço' })
  cep: string;
}
