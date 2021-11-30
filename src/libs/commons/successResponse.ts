import { IBase } from "../../interfaces/mappings/ibase";

export class SuccessResponse {  
    static async commitTrans<T>(data,total,oid)  {       
        const iBase = new IBase<T>();
        iBase.statusCode = '1';
        iBase.oid = oid;
        iBase.total = total
        iBase.message = "Success";
        iBase.body = data;
        return iBase;
    }
 
}