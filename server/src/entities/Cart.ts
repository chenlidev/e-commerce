import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity('cart')
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    cart_id: number;

    @Column({ type: 'int' })
    quantity: number;

    @ManyToOne(() => User, user => user.cart)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Product, product => product.cart)
    @JoinColumn({ name: 'product_id' })
    product: Product;
}
