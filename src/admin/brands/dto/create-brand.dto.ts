import { IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: 'title' })
  title: string;
}
