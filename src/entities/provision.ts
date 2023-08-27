import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Unite from './unite';

@Entity('provisions')
class Provision {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'int', nullable: false})
  valeur!: number;

  @Column({type: 'boolean', default: false})
  epuise!: boolean;

  @Column({type: 'boolean', default: false})
  notified!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @ManyToOne(() => Unite, {cascade: true})
  unite!: Unite;
}

export default Provision;
