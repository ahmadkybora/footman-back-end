import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSchema } from './entities/product.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from '../brands/entities/brand.entity';
import { ProductsCategorySchema } from '../products-category/entities/products-category.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Product])],
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
    MongooseModule.forFeature([
      { name: 'ProductsCategory', schema: ProductsCategorySchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
