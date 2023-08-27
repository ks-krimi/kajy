import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Depense from './depense';

@Entity('plafonds')
class Plafond {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 50, nullable: false})
  tag!: string;

  @Column({type: 'varchar', length: 100, nullable: false})
  desciption!: string;

  @Column({type: 'int', nullable: false})
  montant!: number;

  @Column({type: 'datetime', nullable: false})
  debut!: Date;

  @Column({type: 'datetime', nullable: false})
  fin!: Date;

  @Column({type: 'boolean', default: false})
  notified!: boolean;

  @Column({type: 'varchar', length: 50, nullable: false})
  period!: 'JOURNALIER' | 'HEBDOMADAIRE' | 'MENSUEL' | 'ANNUEL';

  @ManyToMany(() => Depense, {cascade: true})
  @JoinTable()
  depenses!: Depense[];
}

export default Plafond;
