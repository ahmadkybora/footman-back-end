import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandSchema } from './entities/brand.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsCategorySchema } from '../products-category/entities/products-category.entity';
import { ProductsCommentSchema } from '../products-comment/entities/products-comment.entity';

@Module({
  // imports: [MongooseModule.forFeature([Brand])],
  imports: [
    MongooseModule.forFeature([{ name: 'Brands', schema: BrandSchema }]),
    MongooseModule.forFeature([{ name: 'ProductsCategory', schema: ProductsCategorySchema }]),
    MongooseModule.forFeature([{ name: 'Products', schema: ProductsCommentSchema }]),
  ],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
