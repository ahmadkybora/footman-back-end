import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
// import { SearchArticleDto } from './dto/search-article-dto';
import { ISetting } from './entities/setting.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SettingService {
  constructor(
    @InjectModel('Settings')
    private settingsRepository: Model<ISetting>,
  ) {}

  async findAll(): Promise<ISetting[]> {
    return this.settingsRepository.find();
  }
  async findOne(_id: string): Promise<ISetting | null> {
    return await this.settingsRepository.findOne({ _id });
  }

  async create(createSettingDto: CreateSettingDto): Promise<ISetting> {
    return this.settingsRepository.create(createSettingDto);
  }

  async update(_id: string, updateSettingDto: UpdateSettingDto): Promise<ISetting | null> {
    return await this.settingsRepository.findOneAndUpdate(
      { _id },
      { $set: updateSettingDto },
      { new: true },
    );
  }

  async delete(_id: string): Promise<boolean | any> {
    const result = await this.settingsRepository.findOneAndDelete({ _id });
    return result;
  }
}
