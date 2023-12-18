import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn, OneToMany,
} from 'typeorm';
import {Order} from "./Order";
import {Cart} from "./Cart";
import {Review} from "./Review";
import {Product} from "./Product";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ type: 'varchar', length: 255 })
    username: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    phone_number: string | null;

    @CreateDateColumn()
    registration_date: Date;

    @Column({ type: 'varchar', length: 50 })
    role: string;

    @OneToMany(() => Product, product => product.seller)
    products: Product[];

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    @OneToMany(() => Cart, cart => cart.user)
    cart: Cart[];

    @OneToMany(() => Review, review => review.user)
    reviews: Review[];
}
