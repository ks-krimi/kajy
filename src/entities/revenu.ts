import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Portefeuille from './portefeuille';

@Entity('revenus')
class Revenu {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'int', nullable: false})
  somme!: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  source!: string;

  @CreateDateColumn()
  date!: Date;

  @ManyToOne(() => Portefeuille, {
    cascade: true,
  })
  portefeuille!: Portefeuille;
}

export default Revenu;
