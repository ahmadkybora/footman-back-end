import { IsString } from 'class-validator';

export class CreateProductsCategoryDto {
  @IsString({ message: 'title' })
  title: string;

  @IsString({ message: 'brandId' })
  brandId: string;
}
