import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSchema } from './entities/product.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from '../brands/entities/brand.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Product])],
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'Brands', schema: BrandSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
