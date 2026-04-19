import { Module } from '@nestjs/common';
import { ProductsCommentService } from './products-comment.service';
import { ProductsCommentController } from './products-comment.controller';
import { ProductsCommentSchema } from './entities/products-comment.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ProductComment',
        schema: ProductsCommentSchema,
      },
    ]),
  ],
  controllers: [ProductsCommentController],
  providers: [ProductsCommentService],
})
export class ProductsCommentModule {}
