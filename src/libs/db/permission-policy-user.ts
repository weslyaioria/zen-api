import { AutoMap } from '@nartc/automapper';
import { Entity, Column, PrimaryGeneratedColumn, Generated, BeforeInsert, OneToOne } from 'typeorm';
import { Base } from './base';

var bcrypt = require('bcryptjs');

@Entity({ name: "permissionpolicyuser" })
export class PermissionPolicyUser extends Base {
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  oid: string;

  @AutoMap()
  @Column({ length: 100 })
  companyName: string;

  @AutoMap()
  @Column({ length: 100 })
  address: string;

  @AutoMap()
  @Column({ length: 100 })
  contactPerson: string;

  @AutoMap()
  @Column({ length: 14 })
  phoneNumber: string;

  @AutoMap()
  @Column({ length: 100 })
  emailName: string;

  @AutoMap()
  @Column({ length: 100 })
  password: string;

  @AutoMap()
  @Column({ type: 'numeric', nullable: true })
  levelUser: number;

  @AutoMap()
  @Column({ length: 300 })
  androidToken: string;

  @AutoMap()
  @Column({ length: 300, nullable: true })
  expiredTime: string;

  @AutoMap()
  @Column()
  isActive: boolean;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
