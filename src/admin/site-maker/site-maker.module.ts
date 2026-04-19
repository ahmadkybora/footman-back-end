import { Module } from '@nestjs/common';
import { SiteMakerService } from './site-maker.service';
import { SiteMakerController } from './site-maker.controller';

@Module({
  controllers: [SiteMakerController],
  providers: [SiteMakerService],
})
export class SiteMakerModule {}
