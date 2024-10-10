import { Test, TestingModule } from '@nestjs/testing';
import { TaakService } from './taak.service';

describe('TaakService', () => {
  let service: TaakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaakService],
    }).compile();

    service = module.get<TaakService>(TaakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
