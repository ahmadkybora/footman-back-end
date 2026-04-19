import { Module } from '@nestjs/common';
import { ArticlesCommentService } from './articles-comment.service';
import { ArticlesCommentController } from './articles-comment.controller';
import { ArticlesCommentSchema } from './entities/articles-comment.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ArticleComment',
        schema: ArticlesCommentSchema,
      },
    ]),
  ],
  controllers: [ArticlesCommentController],
  providers: [ArticlesCommentService],
})
export class ArticlesCommentModule {}
