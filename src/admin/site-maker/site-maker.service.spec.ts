import { Test, TestingModule } from '@nestjs/testing';
import { SiteMakerService } from './site-maker.service';

describe('SiteMakerService', () => {
  let service: SiteMakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteMakerService],
    }).compile();

    service = module.get<SiteMakerService>(SiteMakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
