import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Category } from './Category';
import { User } from './User';
import {Cart} from "./Cart";
import {OrderDetail} from "./OrderDetail";
import {Review} from "./Review";

@Entity('products')
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string | null;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'int' })
    stock_quantity: number;

    @Column({ type: 'text', array: true, nullable: true })
    image_urls: string[] | null;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Category;


    @ManyToOne(() => User, user => user.products)
    @JoinColumn({ name: 'seller_id' })
    seller: User;

    @OneToMany(() => Cart, cart => cart.product)
    cart: Cart[];

    @OneToMany(() => OrderDetail, orderDetail => orderDetail.product)
    orderDetails: OrderDetail[];

    @OneToMany(() => Review, review => review.product)
    reviews: Review[];
}
