import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { ISetting } from './entities/setting.entity';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Controller('admin/articles')
export class SettingController {
  constructor(private readonly settingsService: SettingService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<ISetting[]> {
    return this.settingsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<ISetting> {
    const brand = await this.settingsService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createSettingDto: CreateSettingDto): Promise<ISetting> {
    try {
      return await this.settingsService.create(createSettingDto);
    } catch (error) {
      if (error?.code === 11000) {
        throw new BadRequestException(error);
      }
      throw error;
    }
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') _id: string,
    @Body() updateSettingDto: UpdateSettingDto,
  ): Promise<ISetting> {
    const updatedBrand = await this.settingsService.update(_id, updateSettingDto);
    if (!updatedBrand) {
      throw new NotFoundException();
    }
    return updatedBrand;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.settingsService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }
}
