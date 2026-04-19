import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandSchema } from './entities/brand.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [MongooseModule.forFeature([Brand])],
  imports: [
    MongooseModule.forFeature([{ name: 'Brands', schema: BrandSchema }]),
  ],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
