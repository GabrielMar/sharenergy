import { IsString, Length } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @Length(3)
  readonly username: string;

  @IsString()
  @Length(8)
  readonly password: string;
}
