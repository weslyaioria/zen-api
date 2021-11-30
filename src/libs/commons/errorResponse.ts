import { IBase } from "../../interfaces/mappings/ibase";

export class ErrorResponse {  
    static async rollBackTrans<T>(err) {
        const iBase = new IBase<T>();
        iBase.statusCode = '0';
        iBase.oid = null;
        iBase.total = 0;
        iBase.message = err.message;
        iBase.body = [] as any;
        return iBase;
    }
 
}