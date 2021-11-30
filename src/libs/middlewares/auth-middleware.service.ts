// import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';
// import { AuthService } from '../../services/auth.service';


// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//     constructor (private authService:AuthService){}

//     public async use(req: Request, res: Response, next: NextFunction) {
        
//         try {            
//             const { authorization } = req.headers;            
//             if (!authorization) {                
//               throw new HttpException({ message: 'missing authz header' }, HttpStatus.BAD_REQUEST);
//             }                  
//             const user = this.authService.authentication(authorization)
//             console.log('5');
//             console.log(user);
//             // req. = user;
//             next();
//         }
//         catch (err) {
//             throw new HttpException({ message: 'invalid token' }, HttpStatus.UNAUTHORIZED)
//         }

//         // const user = 
//     }
// }
