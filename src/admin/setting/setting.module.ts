import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingSchema } from './entities/setting.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [TypeOrmModule.forFeature([Product])],
  imports: [
    MongooseModule.forFeature([{ name: 'Settings', schema: SettingSchema }]),
  ],
  controllers: [SettingController],
  providers: [SettingService],
})
export class SettingModule {}
