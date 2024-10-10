import { PartialType } from '@nestjs/swagger';
import { CreateTaakDto } from './create-taak.dto';

export class UpdateTaakDto extends PartialType(CreateTaakDto) {}
