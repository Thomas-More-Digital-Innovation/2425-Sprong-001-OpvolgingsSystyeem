import { ApiProperty } from "@nestjs/swagger";

export class CreateScoreDto {
    @ApiProperty()
    scoreNaam: string;
    
    @ApiProperty()
    waarde: number;
}
