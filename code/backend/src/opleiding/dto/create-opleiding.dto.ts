import { ApiProperty } from "@nestjs/swagger";

export class CreateOpleidingDto {
    @ApiProperty()
    naam: string;

    @ApiProperty()
    intern: boolean;

    @ApiProperty()
    datumStart: Date;

    @ApiProperty()
    datumEind: Date;
}
