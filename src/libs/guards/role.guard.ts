
import { Injectable, ExecutionContext, UnauthorizedException, CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
 
@Injectable()
export class  RoleGuard implements CanActivate {
    constructor(private readonly reflector:Reflector) {}

    canActivate(context: ExecutionContext) {
        
        
     
        // const user = {
        //     name:'Wesly',
        //     roles:['standard-user']
        // };
        const roles = this.reflector.get<string>('roles',context.getHandler())
        console.log('roles',roles);
   
        if(!roles){
            return true;
        }
        const request = context.switchToHttp().getRequest();        
        const user = request.user;
        console.log('user : ',user)
        const hasRole = ()=> roles.includes(user.role);
        console.log('hasRole = ',hasRole)
        return false;
        // return user && user.role && hasRole;
        // const requiredRoles = 'admin';
        
        // if(!user.roles.includes(requiredRoles)){
        //     // return true;
        //     // throw new UnauthorizedException('user not admin')
        //     return false;
        // }
        // return true;
    }     
}

 