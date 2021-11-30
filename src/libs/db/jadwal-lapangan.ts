import { AutoMap } from '@nartc/automapper';
import { Entity, Column, PrimaryGeneratedColumn, Generated, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base';
import { Lapangan } from './lapangan';

@Entity({ name: "jadwal-lapangan" })
export class JadwalLapangan extends Base {
    @AutoMap()
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    oid: string;

    @Column({ length: 5, nullable: false })
    startTime: string;

    @Column({ length: 5, nullable: false })
    endTime: string;

    @Column({ type: 'numeric', nullable: true })
    harga: number;

    @Column({ type: 'int', nullable: true })
    status: boolean;

    @AutoMap()
    @ManyToOne(type => Lapangan, lapangan => lapangan.jadwalLapangans)
    lapangan: Lapangan;


    // @AutoMap(() => BookingDetail)
    // @OneToMany(type => BookingDetail, bookingDetail => bookingDetail.jadwalLapangan)
    // bookingDetails: BookingDetail[];


}
