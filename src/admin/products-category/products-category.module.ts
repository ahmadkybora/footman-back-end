import { Module } from '@nestjs/common';
import { ProductsCategoryService } from './products-category.service';
import { ProductCategoriesController } from './products-category.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategorySchema } from './entities/products-category.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [TypeOrmModule.forFeature([ProductCategory])],
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductsCategory', schema: ProductsCategorySchema },
    ]),
  ],
  controllers: [ProductCategoriesController],
  providers: [ProductsCategoryService],
})
export class ProductsCategoryModule {}
