import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GebruikerService } from './gebruiker.service';
import { CreateGebruikerDto } from './dto/create-gebruikers.dto';
import { UpdateGebruikerDto } from './dto/update-gebruiker.dto';
import { Gebruiker } from './entities/gebruiker.entity';

@Controller('gebruiker')
export class GebruikerController {
  constructor(private readonly gebruikerService: GebruikerService) {}

  @Post()
  createGebruiker(@Body() createGebruikerDto: CreateGebruikerDto) {
    return this.gebruikerService.createGebruiker(createGebruikerDto);
  }

  @Get()
  findAll() {
    return this.gebruikerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gebruikerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGebruikerDto: UpdateGebruikerDto,
  ) {
    return this.gebruikerService.update(+id, updateGebruikerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gebruikerService.remove(+id);
  }

  @Get('rol/:rolID')
  async getGebruikersByRol(
    @Param('rolID') rolID: number,
  ): Promise<Gebruiker[]> {
    return this.gebruikerService.getGebruikersByRol(rolID);
  }

  @Get('begeleider/:id')
  async getAllGebruikersVanBegeleider(
    @Param('id') begeleiderID: number,
  ): Promise<Gebruiker[]> {
    return this.gebruikerService.getAllGebruikersVanBegeleider(begeleiderID);
  }
}
