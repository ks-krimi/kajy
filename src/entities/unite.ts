import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('unites')
class Unite {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 20, nullable: false})
  nom!: string;

  @Column({type: 'varchar', length: 5, nullable: false})
  abreviation!: string;
}

export default Unite;
