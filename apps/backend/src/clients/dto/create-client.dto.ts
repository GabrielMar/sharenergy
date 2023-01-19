import {
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  Length,
  Matches,
} from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @Length(3)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  @IsNotEmpty()
  @Matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/)
  cpf: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  district: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  complement: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  @Matches(/^[0-9]{5}-[0-9]{3}$/)
  cep: string;
}
