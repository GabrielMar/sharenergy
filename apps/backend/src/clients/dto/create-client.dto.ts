import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateClientDto {
  @IsString()
  @Length(3)
  readonly name: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsPhoneNumber('BR')
  readonly phone: string;

  @IsString()
  @Matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/)
  readonly cpf: string;

  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @IsString()
  @IsNotEmpty()
  readonly state: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @IsNotEmpty()
  readonly district: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly complement: string;

  @IsString()
  @IsNotEmpty()
  readonly number: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]{5}-[0-9]{3}$/)
  readonly cep: string;
}
