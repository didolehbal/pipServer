import { Test, TestingModule } from '@nestjs/testing';
import { ScreenshareGateway } from './screenshare.gateway';

describe('ScreenshareGateway', () => {
  let gateway: ScreenshareGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScreenshareGateway],
    }).compile();

    gateway = module.get<ScreenshareGateway>(ScreenshareGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
