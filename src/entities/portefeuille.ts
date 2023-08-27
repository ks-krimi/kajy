import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('portefeuilles')
class Portefeuille {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'int', default: 0})
  somme!: number;
}

export default Portefeuille;
