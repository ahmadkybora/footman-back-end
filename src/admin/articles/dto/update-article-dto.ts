import { PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article-dto';
import { IsString } from 'class-validator';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @IsString({ message: 'title' })
  title: string;

  @IsString({ message: 'articlesCategoryId' })
  articlesCategoryId: string;

  @IsString({ message: 'description' })
  description: string;
}
