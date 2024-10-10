import { ApiProperty } from "@nestjs/swagger";
import { Groep } from "../../groep/entities/groep.entity";

export class CreateTaakDto {
    @ApiProperty()
    naam: string;

    @ApiProperty()
    groep: Groep;
}
