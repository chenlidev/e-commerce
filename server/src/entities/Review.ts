import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity('reviews')
export class Review extends BaseEntity {
    @PrimaryGeneratedColumn()
    review_id: number;

    @Column({ type: 'text', nullable: true })
    review_text: string | null;

    @Column({ nullable: true })
    rating: number | null;

    @Column()
    review_date: Date;

    @ManyToOne(() => Product, product => product.reviews)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => User, user => user.reviews)
    @JoinColumn({ name: 'user_id' })
    user: User;
}
