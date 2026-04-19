import { IsString } from 'class-validator';

export class SearchBrandDto {
  @IsString({ message: 'search' })
  search: string;
}
