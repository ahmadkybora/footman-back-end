import { IsString } from 'class-validator';

export class CreateFavoriteDto {
  @IsString({ message: 'productId' })
  productId: string;
}
