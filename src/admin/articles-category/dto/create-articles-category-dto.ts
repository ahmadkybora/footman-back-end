import { IsString } from 'class-validator';

export class CreateArticlesCategoryDto {
  @IsString({ message: 'title' })
  title: string;
}
