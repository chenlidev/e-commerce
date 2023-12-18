import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';

@Entity('order_details')
export class OrderDetail extends BaseEntity {
    @PrimaryGeneratedColumn()
    order_detail_id: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price_per_unit: number;

    @ManyToOne(() => Order, order => order.orderDetails)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Product, product => product.orderDetails)
    @JoinColumn({ name: 'product_id' })
    product: Product;
}
