import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class  BaseHeaderVm {

    @Column({ length: 3 })
    statusCode: string;

    @Column('uuid')
    oid: string;

    @Column('text')
    token: string;

    @Column('text')
    message: string;

    @Column('number')
    total: number;
}
