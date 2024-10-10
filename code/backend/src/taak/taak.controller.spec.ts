import { Test, TestingModule } from '@nestjs/testing';
import { TaakController } from './taak.controller';
import { TaakService } from './taak.service';

describe('TaakController', () => {
  let controller: TaakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaakController],
      providers: [TaakService],
    }).compile();

    controller = module.get<TaakController>(TaakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
