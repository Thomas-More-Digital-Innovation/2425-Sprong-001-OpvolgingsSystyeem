import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaakService } from './taak.service';
import { CreateTaakDto } from './dto/create-taak.dto';
import { UpdateTaakDto } from './dto/update-taak.dto';

@Controller('taak')
export class TaakController {
  constructor(private readonly taakService: TaakService) {}

  @Post()
  create(@Body() createTaakDto: CreateTaakDto) {
    return this.taakService.create(createTaakDto);
  }

  @Get()
  findAll() {
    return this.taakService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taakService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaakDto: UpdateTaakDto) {
    return this.taakService.update(+id, updateTaakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taakService.remove(+id);
  }
}
