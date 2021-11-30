import { AutoMap } from '@nartc/automapper';
import { Entity, Column, PrimaryGeneratedColumn, Generated, ManyToOne } from 'typeorm';
import { Base } from './base';
import { Lapangan } from './lapangan';
import { Member } from './member';

@Entity({ name: "booking" })
export class Booking extends Base {
    @AutoMap()
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    oid: string;


    @AutoMap()
    @ManyToOne(type => Member, member => member.bookings)
    member: Member;

    @AutoMap()
    @ManyToOne(type => Lapangan, lapangan => lapangan.bookings)
    lapangan: Lapangan;

    @Column({ length: 5, nullable: false })
    startTime: string;

    @Column({ length: 5, nullable: false })
    endTime: string;

    @Column({ type: 'numeric', nullable: true })
    totalHarga: number;
}
