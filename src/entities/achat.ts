import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

import Category from './category';
import Depense from './depense';

@Entity('achats')
class Achat {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 30, nullable: false})
  nom!: string;

  @Column({type: 'int', nullable: false})
  prix!: number;

  @ManyToOne(() => Category, {cascade: true})
  category!: Category;

  @ManyToOne(() => Depense, {cascade: true})
  depense!: Depense;
}

export default Achat;
