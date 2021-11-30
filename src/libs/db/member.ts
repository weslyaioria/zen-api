import { AutoMap } from '@nartc/automapper';
import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany } from 'typeorm';
import { Base } from './base';
import { Booking } from './booking';

@Entity({name: "member"})
export class Member extends Base {
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  oid: string;

  @AutoMap()
  @Column({ length: 20, nullable: false })
  memberCode: string;

  @AutoMap()
  @Column({ length: 100, nullable: false })
  memberName: string;

  @AutoMap(() => Booking)
  @OneToMany(type => Booking, city => city.member)
  bookings: Booking[];
}
