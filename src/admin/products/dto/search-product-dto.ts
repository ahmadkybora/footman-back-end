import { IsString } from 'class-validator';

export class SearchProductDto {
  @IsString({ message: 'search' })
  search: string;
}
