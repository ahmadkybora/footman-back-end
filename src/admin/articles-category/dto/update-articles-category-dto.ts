import { PartialType } from '@nestjs/swagger';
import { CreateArticlesCategoryDto } from './create-articles-category-dto';
import { IsString } from 'class-validator';

export class UpdateArticlesCategoryDto extends PartialType(CreateArticlesCategoryDto) {
  @IsString({ message: 'title' })
  title: string;
}
