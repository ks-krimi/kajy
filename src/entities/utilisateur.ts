import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Portefeuille from './portefeuille';

@Entity('utilisateurs')
class Utilisateur {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 25, nullable: false})
  nom!: string;

  @OneToOne(() => Portefeuille)
  @JoinColumn()
  portefeuille!: Portefeuille;

  @CreateDateColumn()
  created_at!: Date;
}

export default Utilisateur;
