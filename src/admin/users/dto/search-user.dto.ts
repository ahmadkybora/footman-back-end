import { IsString } from 'class-validator';

export class SearchUserDto {
  @IsString({ message: 'search' })
  search: string;
}
