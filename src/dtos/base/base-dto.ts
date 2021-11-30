export class BaseDto {
  // private static tenantRepo = new MongoTenantRepository();
  public static defaultInsert = {    
    deleted: false,
    userInserted: null,
    insertedDate: new Date(),
    description: null,
    optimisticLockField: 1,
    gCRecord: 1,
  };

  public static defaultUpdateInsert = {        
    lastUpdate: new Date(),
    lastUserId: null,
  };
  public static defaultUpdateDeleteInsert = {    
    lastUpdate: new Date(),
    lastUserId: null,
  };
}
