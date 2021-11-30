import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionPolicyUserModule } from './modules/permission-policy-user.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { typeOrmConfig } from './typeorm.config';
import { LapanganModule } from './modules/basics/lapangan.module';
import { BookingModule } from './modules/basics/booking.module';
import { MemberModule } from './modules/basics/member.module';
import { JadwalLapanganModule } from './modules/basics/jadwal-lapangan.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    // TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '/', 'uploads'),
    }),

    // MailerModule.forRoot({
    //   transport: 'smtps://user@domain.com:pass@smtp.domain.com',
    //   defaults: {
    //     from: '"nest-modules" <modules@nestjs.com>',
    //   },
    //   template: {
    //     dir: __dirname + '/templates',
    //     adapter: new HandlebarsAdapter(), // or new PugAdapter()
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
    MulterModule.register({
      dest: path.resolve(__dirname + '/uploads'),
    }),
    PermissionPolicyUserModule,
    LapanganModule, MemberModule, BookingModule,
    JadwalLapanganModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
