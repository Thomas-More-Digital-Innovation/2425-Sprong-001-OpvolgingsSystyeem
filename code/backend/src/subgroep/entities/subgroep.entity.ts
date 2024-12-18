import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Groep } from '../../groep/entities/groep.entity';
import { Gebruiker } from '../../gebruiker/entities/gebruiker.entity';
import { GebruikerSubgroep } from '../../gebruiker-subgroep/entities/gebruiker-subgroep.entity';

@Entity()
export class Subgroep {
  @PrimaryGeneratedColumn()
  subgroepID: number;

  @Column()
  subgroepNaam: string;

  @ManyToOne(() => Groep, (groep) => groep.subgroepen)
  @JoinColumn({ name: 'groepID' })
  groep: Groep;

  @OneToMany(() => Gebruiker, (gebruiker) => gebruiker.subgroep)
  gebruikers: Gebruiker[];

  @OneToMany(
    () => GebruikerSubgroep,
    (gebruikerSubgroep) => gebruikerSubgroep.subgroep,
  )
  gebruikerSubgroepen: GebruikerSubgroep[];
}
