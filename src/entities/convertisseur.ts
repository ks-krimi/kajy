import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Provision from './provision';
import Unite from './unite';

@Entity('convertisseurs')
class Convertisseur {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', nullable: false})
  nom!: string;

  @Column({type: 'int', nullable: false})
  valeur!: number;

  @Column({type: 'int', nullable: false})
  total!: number;

  @OneToOne(() => Provision, {cascade: true})
  @JoinColumn()
  provision!: Provision;

  @ManyToOne(() => Unite, {cascade: true})
  unite!: Unite;
}

export default Convertisseur;
