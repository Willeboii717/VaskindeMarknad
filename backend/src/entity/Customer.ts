import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CustomerModel {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    password: string;
}