import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('notifications')
class Notification {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'boolean', default: false})
  isViewed!: boolean;

  @Column({type: 'varchar', length: 50, nullable: false})
  description!: string;

  @Column({type: 'varchar', length: 10, default: 'PLAFOND'})
  reference = 'PLAFOND' || 'PROVISION';

  @CreateDateColumn()
  created_at!: Date;
}

export default Notification;
