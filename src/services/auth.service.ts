// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { INVALID_BEARER_TOKEN } from '../configs/constants';
// import { PermissionPolicyUserDto } from '../dtos/permission/permission-policy-user-dto';

// @Injectable()
// export class AuthService {
//     constructor(private jwtService: JwtService) { }
//     async login(permissionPolicyUserDto: PermissionPolicyUserDto, data: any) {
//         console.log('auth ')
//         const payload = { emailName: permissionPolicyUserDto.emailName, sub: permissionPolicyUserDto.password };
//         console.log('auth payload : ', payload)
//         const accessToken = this.jwtService.sign(payload);
//         console.log('accessToken ', accessToken)
//         return {
//             companyOid: data.oid,
//             companyName: permissionPolicyUserDto.companyName,
//             address: permissionPolicyUserDto.address,
//             contactPerson: permissionPolicyUserDto.contactPerson,
//             phoneNumber: permissionPolicyUserDto.phoneNumber,
//             emailName: permissionPolicyUserDto.emailName,
//             access_token: accessToken,
//             refreshToken: (await this.RefreshToken(permissionPolicyUserDto.emailName, accessToken)).refreshToken,
//             permissionPolicyUser: data,
//             levelUser: data.levelUser,
//             androidToken: "123"
//         };
//     }
//     async RefreshToken(emailName: string, refreshToken: string) {
//         const payload = { emailName: emailName, sub: refreshToken };
//         console.log('pyaload ref : ', payload)
//         return {
//             refreshToken: this.jwtService.sign(payload),
//         };
//     }

//     private getToken(authToken: string): string {
//         const match = authToken.match(/^Bearer (.*)$/);
//         if (!match || match.length < 2) {
//           throw new UnauthorizedException(INVALID_BEARER_TOKEN);
//         }
//         return match[1];
//       }

//     async authentication(authToken: string): Promise<[PermissionPolicyUser[],number]> {
//         const tokenString = this.getToken(authToken);        
//         try {
//             const data = this.jwtService.decode(tokenString)
//             console.log('data : ', data)
//             // const decodedToken  = await admin.auth().verifyIdToken(tokenString);            
//             const decodedToken =  this.getUserByEmail(data['emailName'])
//             console.log('decodedToken : ',decodedToken);
//             // const  {
//             //   email,
//             //   uid,
//             //   role
//             // } = decodedToken;
//             // return { email, uid, role};
//             return decodedToken;

//         } catch (err) {
//             throw new UnauthorizedException(err.message)
//         }
//     }

//     private getUserByEmail(emailName :string){
//         // TODO GET ROLE AND PERMMISSION
//         return " weslyaioria@gmail.com"
//     }
// }
