import { Test, TestingModule } from '@nestjs/testing';
import { FiliersController } from './filiers.controller';

describe('Filiers Controller', () => {
  let controller: FiliersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiliersController],
    }).compile();

    controller = module.get<FiliersController>(FiliersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
