import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleSchema } from './entities/article.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [TypeOrmModule.forFeature([Product])],
  imports: [
    MongooseModule.forFeature([{ name: 'Articles', schema: ArticleSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
