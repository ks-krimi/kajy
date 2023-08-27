import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

import Convertisseur from './convertisseur';
import Unite from './unite';

@Entity('consomations')
class Consomation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'int', nullable: false})
  valeur!: number;

  @ManyToOne(() => Unite, {cascade: true})
  convertisseur!: Convertisseur;
}

export default Consomation;
