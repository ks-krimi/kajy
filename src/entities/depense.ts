import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Portefeuille from './portefeuille';

@Entity('depenses')
class Depense {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'int', nullable: false})
  somme!: number;

  @Column({type: 'varchar', length: 100, nullable: false})
  description!: string;

  @CreateDateColumn()
  date!: Date;

  @ManyToOne(() => Portefeuille, {
    cascade: true,
  })
  portefeuille!: Portefeuille;
}

export default Depense;
