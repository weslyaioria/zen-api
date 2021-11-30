// import { Injectable } from '@nestjs/common';
// import { Raw, QueryRunner } from 'typeorm';
// import { CreateProductCategoryDto, PageProductCategoryDto, UpdateProductCategoryDto } from '../dtos/payload-product-category-dto';
// import { IProductCategoryService } from '../interfaces/services/manufacturing/iproduct-category.service';
// import { productCategory } from '../libs/db/productcategory';
// import { GeneralRepositoryService } from '../repository/general-repository';

// @Injectable()
// export class  ProductCategoryService implements IProductCategoryService {
//     constructor(
//         private readonly generalRepo: GeneralRepositoryService,
//     ) { }
//     private get productCategoryRepo() {
//         return this.generalRepo.productCategory();
//     }
//     async findAll(): Promise<productCategory[]> {
//         return await this.productCategoryRepo.find();
//     }

//     async findById(queryRunner: QueryRunner,oid: string):  Promise<productCategory>;productCategory[]>;productCategory> {
//         const productCategory = await this.productCategoryRepo.findOne({
//             select: ['oid', 'categoryCode', 'categoryName'],
//             where: [{ oid }],
//         });
//         return productCategory;
//     }
//     async findAdvanceFilter(pageProductCategoryDto: PageProductCategoryDto): Promise<[productCategory[],number]> {
//         const qSkip = pageProductCategoryDto.pageIndex;
//         const qTake = pageProductCategoryDto.pageSize;
//         const [productCategorys, productCategoryCount] = await this.productCategoryRepo.findAndCount({
//             where: {
//                 deleted: Raw(`
//                 'false' AND ('categoryCode' LIKE '%${pageProductCategoryDto.categoryCode}%' OR 'categoryName' LIKE '%${pageProductCategoryDto.categoryName}%')
//                 `),
//             },
//             order: {
//                 categoryCode: 'ASC',
//                 categoryName: 'DESC',
//             },
//             skip: qSkip,    // page index
//             take: qTake,    // row count per page
//             // cache: 60000, // 1 minute
//         });

//         return {
//             data: productCategorys,
//             total: productCategoryCount,
//         };
//     }

//     async create(queryRunner: QueryRunner, productCategorydto: CreateProductCategoryDto) {
//         const _productCategory = new productCategory();
//         _productCategory.categoryCode = productCategorydto.categoryCode;
//         _productCategory.categoryName = productCategorydto.categoryName;
//         _productCategory.deleted = false;
//         _productCategory.userInserted = productCategorydto.userInserted;
//         _productCategory.lastUpdate = new Date();
//         _productCategory.insertedDate = new Date();
//         await queryRunner.manager.save(_productCategory);
//     }

//     async update(queryRunner: QueryRunner, productCategorydto: UpdateProductCategoryDto) {
//         await queryRunner.manager.update(productCategory, { oid: productCategorydto.oid }, productCategorydto);
//     }

//     async delete(queryRunner: QueryRunner, oid: string) {
//         const _productCategory = await queryRunner.manager.findOne(productCategory, oid);
//         _productCategory.deleted = true;
//         await queryRunner.manager.update(productCategory, { oid }, _productCategory);
//     }
// }
