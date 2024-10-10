import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Groep } from "../../groep/entities/groep.entity";

@Entity()
export class Taak {
    @PrimaryGeneratedColumn()
    taakID: number;

    @Column()
    naam: string;

    @ManyToOne(() => Groep, (groep) => groep.taaks)
    @JoinColumn({ name: 'groepID' })
    groep: Groep;
}
