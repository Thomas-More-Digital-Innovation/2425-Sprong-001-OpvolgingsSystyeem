import { Injectable } from '@nestjs/common';
import { CreateTaakDto } from './dto/create-taak.dto';
import { UpdateTaakDto } from './dto/update-taak.dto';
import { Repository } from 'typeorm';
import { Taak } from './entities/taak.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaakService {
  constructor(
    @InjectRepository(Taak)
    private readonly taakRepository: Repository<Taak>,
  ) {}
  create(createTaakDto: CreateTaakDto) {
    return this.taakRepository.save(createTaakDto);
  }

  findAll() {
    return this.taakRepository.find();
  }

  findOne(taakID: number) {
    return this.taakRepository.findOneBy({ taakID });
  }

  update(taakID: number, updateTaakDto: UpdateTaakDto) {
    return this.taakRepository.update(taakID, updateTaakDto);
  }

  remove(taakID: number) {
    return this.taakRepository.delete({ taakID });
  }
}
