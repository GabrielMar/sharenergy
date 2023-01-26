import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3)
  readonly username: string;

  @IsString()
  @Length(8)
  readonly password: string;
}
