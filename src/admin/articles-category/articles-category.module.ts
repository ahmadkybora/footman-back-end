import { Module } from '@nestjs/common';
import { ArticlesCategoryService } from './articles-category.service';
import { ArticlesCategoryController } from './articles-category.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesCategorySchema } from './entities/articles-category.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [TypeOrmModule.forFeature([Product])],
  imports: [
    MongooseModule.forFeature([{ name: 'ArticlesCategory', schema: ArticlesCategorySchema }]),
  ],
  controllers: [ArticlesCategoryController],
  providers: [ArticlesCategoryService],
})
export class ArticlesCategoryModule {}
