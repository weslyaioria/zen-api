import { AutoMap } from '@nartc/automapper';
import {
  Column,
} from 'typeorm';

const isMssql = process.env.NODE_ENV !== 'local-mssql';
export abstract class Base {

  @AutoMap()
  @Column({ type: 'text', nullable: true })
  description: string;

  // @VersionColumn({})
  @Column({ type: 'numeric', nullable: true })
  optimisticLockField: number;

  @Column({ type: 'numeric', nullable: true })
  gCRecord: number;

  @Column(isMssql ? { type: 'int', nullable: true } : { type: 'int', nullable: true })
  deleted: boolean;

  @Column({ length: 36, nullable: true })
  userInserted: string;

  @Column({ type: 'datetime', nullable: true })
  insertedDate: Date;

  @Column({ length: 36, nullable: true })
  lastUserId: string;

  // @Column({ type: 'datetime', nullable: true, default: () => 'NOW()' }) // mysql
  @Column({ type: 'datetime', nullable: true, default: () => isMssql ? 'NOW()' : 'GETDATE()' })
  lastUpdate: Date;
}
