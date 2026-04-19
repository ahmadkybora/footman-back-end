import { PartialType } from '@nestjs/swagger';
import { CreateSiteMakerDto } from './create-site-maker.dto';

export class UpdateSiteMakerDto extends PartialType(CreateSiteMakerDto) {}
