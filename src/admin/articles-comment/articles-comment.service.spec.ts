import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesCommentService } from './articles-comment.service';

describe('ArticlesCommentService', () => {
  let service: ArticlesCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesCommentService],
    }).compile();

    service = module.get<ArticlesCommentService>(ArticlesCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
