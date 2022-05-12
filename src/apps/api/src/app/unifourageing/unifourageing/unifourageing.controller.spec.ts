import { Test, TestingModule } from '@nestjs/testing';
import { UnifourageingController } from './unifourageing.controller';

describe('UnifourageingController', () => {
  let controller: UnifourageingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnifourageingController],
    }).compile();

    controller = module.get<UnifourageingController>(UnifourageingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
