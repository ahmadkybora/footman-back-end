import { IsString } from 'class-validator';

export class SearchArticlesCategoryDto {
  @IsString({ message: 'search' })
  search: string;
}
