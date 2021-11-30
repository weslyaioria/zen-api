
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Serverh5n&*#',
  database: 'futsaldb',
  entities: ['dist/libs/db/*.js'],
  synchronize: true,
  // synchronize: process.env.NODE_ENV === 'development',
  migrationsTableName: '__MigrationHistory',
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'build/typeorm/entities',
    migrationsDir: 'build/typeorm/migrations',
    subscribersDir: 'build/typeorm/subscribers',
  },
  migrationsRun: true,
  logging: false,
  maxQueryExecutionTime: 1000,

};

// import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// export const typeOrmConfig: TypeOrmModuleOptions = {
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: '2363194',
//     database: 'erpdb',
//     entities: ['models/**/*.js'],
//     cache: true,
//     logging: false,
//     synchronize: process.env.NODE_ENV === 'development'
// }
