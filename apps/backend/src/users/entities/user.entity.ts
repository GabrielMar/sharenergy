import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 'superman', description: 'Nome de usúario' })
  username: string;

  @ApiProperty({
    example: 'Abc123456++',
    description: 'Senha',
  })
  password: string;
}
