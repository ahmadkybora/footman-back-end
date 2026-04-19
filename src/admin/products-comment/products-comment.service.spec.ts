import { Test, TestingModule } from '@nestjs/testing';
import { ProductsCommentService } from './products-comment.service';

describe('ProductsCommentService', () => {
  let service: ProductsCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsCommentService],
    }).compile();

    service = module.get<ProductsCommentService>(ProductsCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
