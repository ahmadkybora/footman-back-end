import { IsString } from 'class-validator';

export class CreateCartDto {
  @IsString({ message: 'userId' })
  userId: string;

  @IsString({ message: 'productId' })
  productId: string;
}
