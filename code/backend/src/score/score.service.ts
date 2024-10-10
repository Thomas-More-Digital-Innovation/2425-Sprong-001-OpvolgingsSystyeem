import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { Repository } from 'typeorm';
import { Score } from './entities/score.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScoreService {
  constructor(
    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>,
  ){}
  create(createScoreDto: CreateScoreDto) {
    return this.scoreRepository.save(createScoreDto);
  }

  findAll() {
    return this.scoreRepository.find();
  }

  findOne(scoreID: number) {
    return this.scoreRepository.findOneBy({ scoreID });
  }

  update(scoreID: number, updateScoreDto: UpdateScoreDto) {
    return this.scoreRepository.update(scoreID, updateScoreDto);
  }

  remove(scoreID: number) {
    return this.scoreRepository.delete({ scoreID });
  }
}
