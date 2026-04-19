import { Test, TestingModule } from '@nestjs/testing';
import { ProductsCommentController } from './products-comment.controller';
import { ProductsCommentService } from './products-comment.service';

describe('ProductsCommentController', () => {
  let controller: ProductsCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsCommentController],
      providers: [ProductsCommentService],
    }).compile();

    controller = module.get<ProductsCommentController>(ProductsCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
