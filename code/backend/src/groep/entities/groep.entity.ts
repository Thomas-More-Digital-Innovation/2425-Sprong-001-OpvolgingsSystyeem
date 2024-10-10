import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Taak } from "../../taak/entities/taak.entity";

@Entity()
export class Groep {
    @PrimaryGeneratedColumn()
    groepID: number;

    @Column()
    naam: string;

    @OneToMany(() => Taak, (taak) => taak.groep)
    taaks: Taak[];
}
