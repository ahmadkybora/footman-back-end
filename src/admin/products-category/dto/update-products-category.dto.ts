import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsCategoryDto } from './create-products-category.dto';

export class UpdateProductsCategoryDto extends PartialType(CreateProductsCategoryDto) {
  @IsString({ message: 'title' })
  title: string;

  @IsString({ message: 'brandId' })
  brandId: string;
}
