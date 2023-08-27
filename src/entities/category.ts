import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({type: 'varchar', length: 20, nullable: false})
  nom!: string;
}

export default Category;
