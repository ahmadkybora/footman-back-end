import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product-dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
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
