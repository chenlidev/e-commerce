import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from 'typeorm';
import {Product} from "./Product";

@Entity('categories')
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}
