import { Module } from '@nestjs/common';
import { PermissionPolicyUserService } from '../services/permission/permission-policy-user.service';
import { PermissionPolicyUserController } from '../controllers/web/security/permission-policy-user.controller';
import { PermissionPolicyUserRepository } from '../repository/permission/permission-policy-user-repository';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../configs/constants';
import { JwtStrategy } from '../libs/guards/jwt.strategy';

@Module({
  imports: [PermissionPolicyUserModule,
    PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '600000s' }, // JWT Time 
    }),],
  controllers: [PermissionPolicyUserController],
  providers: [PermissionPolicyUserService,JwtStrategy,PermissionPolicyUserRepository],
  exports: [PermissionPolicyUserService],
})
export class  PermissionPolicyUserModule { }
