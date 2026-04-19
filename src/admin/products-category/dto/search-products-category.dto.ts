import { IsString } from 'class-validator';

export class SearchProductsCategoryDto {
  @IsString({ message: 'search' })
  search: string;
}
