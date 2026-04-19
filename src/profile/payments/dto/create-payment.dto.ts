import { IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsString({ message: 'userId' })
  userId: string;
}
