import { Module } from '@nestjs/common';
import { TaakService } from './taak.service';
import { TaakController } from './taak.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taak } from './entities/taak.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Taak])],
  controllers: [TaakController],
  providers: [TaakService],
})
export class TaakModule {}
