import { Injectable } from '@nestjs/common';
import { CreateGebruikerDto } from './dto/create-gebruikers.dto';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gebruiker } from './entities/gebruiker.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class GebruikerService {
  constructor(
    @InjectRepository(Gebruiker)
    private readonly gebruikerRepository: Repository<Gebruiker>,
  ) {}

  async createGebruiker(createGebruikerDto: CreateGebruikerDto) {
    const hashedWachtwoord = await bcrypt.hash(
      createGebruikerDto.wachtwoord,
      10,
    );
    return this.gebruikerRepository.save({
      ...createGebruikerDto,
      wachtwoord: hashedWachtwoord,
    });
  }

  findAll() {
    return this.gebruikerRepository.find();
  }

  findOne(gebruikerID: number) {
    return this.gebruikerRepository.findOneBy({ gebruikerID });
  }

  update(gebruikerID: number, updateGebruikerDto: UpdateGebruikerDto) {
    return this.gebruikerRepository.update(gebruikerID, updateGebruikerDto);
  }

  remove(gebruikerID: number) {
    return this.gebruikerRepository.delete({ gebruikerID });
  }

  async findGebruikerByEmail(email: string): Promise<Gebruiker | undefined> {
    return this.gebruikerRepository.findOne({
      where: { email },
      relations: ['rol'],
    });
  }
}
