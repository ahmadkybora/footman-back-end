import { IsString, IsEmail } from 'class-validator';

export class RegisterUserDto {
  @IsString({ message: 'firstName' })
  firstName: string;

  @IsString({ message: 'lastName' })
  lastName: string;

  @IsEmail({}, { message: 'email' })
  email: string;

  @IsString({ message: 'userName' })
  userName: string;

  @IsString({ message: 'phoneNumber' })
  phoneNumber: string;

  @IsString({ message: 'password' })
  password: string;
}

export class LoginUserDto {
  @IsString({ message: 'phoneNumber' })
  phoneNumber: string;

  // @IsString({ message: 'password' })
  // password: string;
}

export class LogoutUserDto {
  @IsString({ message: 'token' })
  token: string;
}
