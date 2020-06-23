import { Test, TestingModule } from '@nestjs/testing';
import { SolutionsService } from './solution.service';

describe('SolutionService', () => {
  let service: SolutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolutionsService],
    }).compile();

    service = module.get<SolutionsService>(SolutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
