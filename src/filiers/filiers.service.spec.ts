import { Test, TestingModule } from '@nestjs/testing';
import { FiliersService } from './filiers.service';

describe('FiliersService', () => {
  let service: FiliersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiliersService],
    }).compile();

    service = module.get<FiliersService>(FiliersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
