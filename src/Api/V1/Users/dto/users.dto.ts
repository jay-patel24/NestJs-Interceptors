import { IsEmail, IsString } from 'class-validator';
import { IsNotBlank } from 'nestjs-validators';

export class UserDto {
  @IsNotBlank()
  @IsString()
  name: string;

  @IsNotBlank()
  @IsEmail()
  email: string;

  @IsNotBlank()
  contact: string;

  @IsNotBlank()
  @IsString()
  password: string;
}
