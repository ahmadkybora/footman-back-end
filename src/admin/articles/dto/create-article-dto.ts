import { IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString({ message: 'title' })
  title: string;

  @IsString({ message: 'articlesCategoryId' })
  articlesCategoryId: string;

  @IsString({ message: 'description' })
  description: string;
}
