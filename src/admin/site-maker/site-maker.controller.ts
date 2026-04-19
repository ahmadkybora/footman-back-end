import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteMakerService } from './site-maker.service';
import { CreateSiteMakerDto } from './dto/create-site-maker.dto';
import { UpdateSiteMakerDto } from './dto/update-site-maker.dto';

@Controller('site-maker')
export class SiteMakerController {
  constructor(private readonly siteMakerService: SiteMakerService) {}

  @Post()
  create(@Body() createSiteMakerDto: CreateSiteMakerDto) {
    return this.siteMakerService.create(createSiteMakerDto);
  }

  @Get()
  findAll() {
    return this.siteMakerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteMakerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteMakerDto: UpdateSiteMakerDto) {
    return this.siteMakerService.update(+id, updateSiteMakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteMakerService.remove(+id);
  }
}
