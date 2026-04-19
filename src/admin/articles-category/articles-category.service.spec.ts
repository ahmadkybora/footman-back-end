import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesCategoryService } from './articles-category.service';

describe('ArticlesCategoryService', () => {
  let service: ArticlesCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticlesCategoryService],
    }).compile();

    service = module.get<ArticlesCategoryService>(ArticlesCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
