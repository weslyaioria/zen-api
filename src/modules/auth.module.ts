// import { Module } from '@nestjs/common';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from '../services/auth.service';
// import { JwtModule } from '@nestjs/jwt';
// import { PermissionPolicyUserModule } from './permission-policy-user.module';
// import { AuthController } from '../controllers/auth.controller';
// import { jwtConstants } from '../configs/constants';

// @Module({
//     imports: [PermissionPolicyUserModule,
//         PassportModule,
//         JwtModule.register({
//             secret: jwtConstants.secret,
//             signOptions: { expiresIn: '600000s' }, // JWT Time 
//         }),],
//     controllers: [AuthController],
//     providers: [AuthService],
//     exports: [AuthService],
// })
// export class  AuthModule { }
