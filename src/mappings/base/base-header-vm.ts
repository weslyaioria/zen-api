import { Column } from 'typeorm';

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

    @Column('number')
    take: number;
    
    @Column('number')
    skip: number;

    @Column('number')
    page?: number;
    
    @Column('number')
    pages?: number;
}
