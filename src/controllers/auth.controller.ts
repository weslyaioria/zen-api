// import { Controller, Post, Body } from '@nestjs/common';
// import { ApiBearerAuth } from '@nestjs/swagger';
// import { PermissionPolicyUserDto } from '../dtos/permission/permission-policy-user-dto';
// import { AuthService } from '../services/auth.service'; 
// import { PermissionPolicyUserService } from '../services/permission/permission-policy-user.service';


// @ApiBearerAuth()
// @Controller()
// export class  AuthController {
//     constructor(private authService: AuthService, private permissionPolicyUserService: PermissionPolicyUserService) { }

//     @Post('auth/login')
//     async login(@Body() payload: PermissionPolicyUserDto) {      
//         console.log('start ' )  
//         const data=null;
//         // const data = await this.permissionPolicyUserService.validateUser(payload.emailName, payload.password);     
//         console.log('data : ',data)
//         if (data){             
//             const auth =  this.authService.login(payload,data);            
//             return auth;
//         }
//         else
//             return 'no data';
//     }
// }