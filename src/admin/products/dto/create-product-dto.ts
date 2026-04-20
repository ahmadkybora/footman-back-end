import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'title' })
  title: string;

  @IsString({ message: 'brandId' })
  brandId: string;

  @IsString({ message: 'productsCategoryId' })
  productsCategoryId: string;

  @IsNumber({}, { message: 'price' })
  price: number;

  @IsNumber({}, { message: 'qty' })
  qty: number;
}
