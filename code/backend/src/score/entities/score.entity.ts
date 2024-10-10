import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Score {
    @PrimaryGeneratedColumn()
    scoreID: number;

    @Column()
    scoreNaam: string;

    @Column('float')
    waarde: number;
}
