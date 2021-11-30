import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Like, QueryRunner } from 'typeorm';
import { PagePermissionPolicyUserDto, UpdatePermissionPolicyUserDto, PermissionPolicyUserDto } from '../../dtos/permission/permission-policy-user-dto';
import { IPermissionPolicyUserService } from '../../interfaces/services/permission/ipermission-policy-user.service';
import { PermissionPolicyUser } from '../../libs/db/permission-policy-user';
import { PermissionPolicyUserRepository } from '../../repository/permission/permission-policy-user-repository';
var bcrypt = require('bcryptjs');
import { from, Observable } from 'rxjs';

@Injectable()
export class PermissionPolicyUserService implements IPermissionPolicyUserService {

  constructor(private permissionPolicyUserRepository: PermissionPolicyUserRepository, private jwtService: JwtService) { }

  async Login(queryRunner: QueryRunner, emailName: string, password: string): Promise<any> {
    const where = [{ emailName }];
    const relations = ['permissionPolicyRole', 'permissionPolicyRole.permissionPolicyMenus'];
    const select = ['oid'];

    const filter = {
      select,
      where,
      relations
    }

    let data;
    const user = await this.permissionPolicyUserRepository.findOne(queryRunner, filter)

    if (user && this.validatePassword(password, user.password)) {
      data = user;
    } else
      data = null;

    if (data) {
      const payload = { emailName: emailName, sub: password };
      const accessToken = this.jwtService.sign(payload);
      return {
        company: data.oid,
        companyName: data.companyName,
        address: data.address,
        contactPerson: data.contactPerson,
        phoneNumber: data.phoneNumber,
        emailName: data.emailName,
        access_token: accessToken,
        refreshToken: (this.RefreshToken(data.emailName, accessToken)).refreshToken,
        permissionPolicyUser: data,
        levelUser: data.levelUser
      };

    }
    else
      return null;
  }

  RefreshToken(emailName: string, refreshToken: string) {
    const payload = { emailName: emailName, sub: refreshToken };
    console.log('pyaload ref : ', payload)
    return {
      refreshToken: this.jwtService.sign(payload),
    };
  }

  private validatePassword(password: string, storedPasswordHash: string): Observable<boolean> {
    return this.comparePasswords(password, storedPasswordHash);
  }
  comparePasswords(password: string, storedPasswordHash: string): Observable<any> {
    return from(bcrypt.compare(password, storedPasswordHash));
  }
  findAll(queryRunner: QueryRunner): Promise<PermissionPolicyUser[]> {
    return this.permissionPolicyUserRepository.findAll(queryRunner)
  }

  findById(queryRunner: QueryRunner, oid: string): Promise<PermissionPolicyUser> {
    return this.permissionPolicyUserRepository.findById(queryRunner, oid)
  }

  findACountFilter(queryRunner: QueryRunner, pagePermissionPolicyUserDto: PagePermissionPolicyUserDto): Promise<[PermissionPolicyUser[],number]> {
    const where: any = [];
    if (pagePermissionPolicyUserDto.companyName) {
      where.push({ companyName: Like('%' + pagePermissionPolicyUserDto.companyName + '%') })
    }
    if (pagePermissionPolicyUserDto.address) {
      where.push({ address: Like('%' + pagePermissionPolicyUserDto.address + '%') })
    }
    Object.assign(where, { deleted: false })
    const select = ['oid', 'companyName', 'address'];


    const skip = pagePermissionPolicyUserDto.pageIndex;
    const take = pagePermissionPolicyUserDto.pageSize;

    const filter = {
      select,
      where,
      // order,
      skip,
      take
    }
    return this.permissionPolicyUserRepository.findCountFilter(queryRunner, filter)
  }

  create(queryRunner: QueryRunner, permissionPolicyUserdto: PermissionPolicyUserDto) {
    const _permissionPolicyUser = new PermissionPolicyUser();
    Object.assign(_permissionPolicyUser, permissionPolicyUserdto);
    return this.permissionPolicyUserRepository.create(queryRunner, _permissionPolicyUser)
  }

  update(queryRunner: QueryRunner, permissionPolicyUserdto: UpdatePermissionPolicyUserDto) {
    return this.permissionPolicyUserRepository.update(queryRunner, permissionPolicyUserdto);
  }

  async delete(queryRunner: QueryRunner, oid: string) {
    const permissionPolicyUserdto = await this.permissionPolicyUserRepository.findById(queryRunner, oid)
    permissionPolicyUserdto.deleted = true;
    return this.permissionPolicyUserRepository.update(queryRunner, permissionPolicyUserdto);
  }
}


