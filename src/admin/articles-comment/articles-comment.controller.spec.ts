import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesCommentController } from './articles-comment.controller';
import { ArticlesCommentService } from './articles-comment.service';

describe('ArticlesCommentController', () => {
  let controller: ArticlesCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesCommentController],
      providers: [ArticlesCommentService],
    }).compile();

    controller = module.get<ArticlesCommentController>(ArticlesCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
