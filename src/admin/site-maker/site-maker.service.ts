import { Injectable } from '@nestjs/common';
import { CreateSiteMakerDto } from './dto/create-site-maker.dto';
import { UpdateSiteMakerDto } from './dto/update-site-maker.dto';

@Injectable()
export class SiteMakerService {
  create(createSiteMakerDto: CreateSiteMakerDto) {
    return 'This action adds a new siteMaker';
  }

  findAll() {
    return `This action returns all siteMaker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} siteMaker`;
  }

  update(id: number, updateSiteMakerDto: UpdateSiteMakerDto) {
    return `This action updates a #${id} siteMaker`;
  }

  remove(id: number) {
    return `This action removes a #${id} siteMaker`;
  }
}
