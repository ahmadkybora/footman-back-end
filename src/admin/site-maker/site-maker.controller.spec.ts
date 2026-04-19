import { Test, TestingModule } from '@nestjs/testing';
import { SiteMakerController } from './site-maker.controller';
import { SiteMakerService } from './site-maker.service';

describe('SiteMakerController', () => {
  let controller: SiteMakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteMakerController],
      providers: [SiteMakerService],
    }).compile();

    controller = module.get<SiteMakerController>(SiteMakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
