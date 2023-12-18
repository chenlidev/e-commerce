import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { OrderDetail } from './OrderDetail';

@Entity('orders')
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    order_id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total_amount: number;

    @Column({ type: 'varchar', length: 50 })
    status: string;

    @Column()
    creation_date: Date;

    @Column({ nullable: true })
    update_date: Date | null;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @OneToMany(() => OrderDetail, orderDetail => orderDetail.order)
    orderDetails: OrderDetail[];
}
