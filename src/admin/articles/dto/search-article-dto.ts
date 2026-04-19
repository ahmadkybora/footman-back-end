import { IsString } from 'class-validator';

export class SearchArticleDto {
  @IsString({ message: 'search' })
  search: string;
}
