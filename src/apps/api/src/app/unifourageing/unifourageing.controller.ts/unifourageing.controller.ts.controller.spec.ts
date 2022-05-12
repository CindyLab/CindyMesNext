import { Test, TestingModule } from '@nestjs/testing';
import { Unifourageing.Controller.TsController } from './unifourageing.controller.ts.controller';

describe('Unifourageing.Controller.TsController', () => {
  let controller: Unifourageing.Controller.TsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Unifourageing.Controller.TsController],
    }).compile();

    controller = module.get<Unifourageing.Controller.TsController>(Unifourageing.Controller.TsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
