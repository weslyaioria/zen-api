// import { getRepository } from 'typeorm';
// import { Injectable } from '@nestjs/common';
// import { productCategory } from '../libs/db/productcategory';
// import { abdomen } from '../libs/db/abdomen';
// import { area } from '../libs/db/area';
// import { atum } from '../libs/db/atum';
// import { bank } from '../libs/db/bank';
// import { bed } from '../libs/db/bed';
// import { borrowing } from '../libs/db/borrowing';
// import { branch } from '../libs/db/branch';
// import { brand } from '../libs/db/brand';
// import { cashIn } from '../libs/db/cash-in';
// import { cashInDetail } from '../libs/db/cash-in-detail';
// import { cashOut } from '../libs/db/cash-out';
// import { cashOutDetail } from '../libs/db/cash-out-detail';
// import { categoryCorrection } from '../libs/db/categorycorrection';
// import { categoryIn } from '../libs/db/categoryin';
// import { categoryOut } from '../libs/db/categoryout';
// import { categoryPrice } from '../libs/db/categoryprice';
// import { certification } from '../libs/db/certification';
// import { city } from '../libs/db/city';
// import { classRoom } from '../libs/db/classroom';
// import { client } from '../libs/db/client';
// import { company } from '../libs/db/company';
// import { completenes } from '../libs/db/completenes';
// import { country } from '../libs/db/country';
// import { course } from '../libs/db/course';
// import { currency } from '../libs/db/currency';
// import { currencyRate } from '../libs/db/currencyrate';
// import { customer } from '../libs/db/customer';
// import { customerAddress } from '../libs/db/customeraddress';
// import { customerContact } from '../libs/db/customercontact';
// import { customerCredit } from '../libs/db/customercredit';
// import { departemen } from '../libs/db/departemen';
// import { disease } from '../libs/db/disease';
// import { district } from '../libs/db/district';
// import { division } from '../libs/db/division';
// import { doctor } from '../libs/db/doctor';
// import { doctorFee } from '../libs/db/doctorFee';
// import { doctorService } from '../libs/db/doctorservices';
// import { education } from '../libs/db/education';
// import { employee } from '../libs/db/employee';
// import { entity } from '../libs/db/entity';
// import { ethnicity } from '../libs/db/ethnicity';
// import { examination } from '../libs/db/examination';
// import { facilitie } from '../libs/db/facilitie';
// import { family } from '../libs/db/family';
// import { feature } from '../libs/db/feature';
// import { fisik } from '../libs/db/fisik';
// import { genitalia } from '../libs/db/genitalia';
// import { hidung } from '../libs/db/hidung';
// import { hospital } from '../libs/db/hospital';
// import { house } from '../libs/db/house';
// import { houseCategory } from '../libs/db/house-category';
// import { houseFeature } from '../libs/db/house-features';
// import { icd10 } from '../libs/db/icd10';
// import { inventaris } from '../libs/db/inventaris';
// import { kebiasaan } from '../libs/db/kebiasaan';
// import { kesehatan } from '../libs/db/kesehatan';
// import { kulit } from '../libs/db/kulit';
// import { laboratorium } from '../libs/db/labolatorium';
// import { language } from '../libs/db/language';
// import { leher } from '../libs/db/leher';
// import { limfe } from '../libs/db/limfe';
// import { locationArea } from '../libs/db/location-area';
// import { mata } from '../libs/db/mata';
// import { medical } from '../libs/db/medical';
// import { member } from '../libs/db/member';
// import { memberType } from '../libs/db/membertype';
// import { mental } from '../libs/db/mental';
// import { mesin } from '../libs/db/mesin';
// import { muka } from '../libs/db/muka';
// import { mulut } from '../libs/db/mulut';
// import { mutasi } from '../libs/db/mutasi';
// import { nationality } from '../libs/db/nationality';
// import { neumuskoloskeletal } from '../libs/db/neumuskoloskeletal';
// import { news } from '../libs/db/news';
// import { newsCategory } from '../libs/db/newscategory';
// import { officer } from '../libs/db/officer';
// import { opname } from '../libs/db/opname';
// import { partner } from '../libs/db/partner';
// import { pekerjaan } from '../libs/db/pekerjaan';
// import { pekerjaanLapangan } from '../libs/db/pekerjaanLapangan';
// import { pekerjaanOffice } from '../libs/db/pekerjaanOffice';
// import { pengadaan } from '../libs/db/pengadaan';
// import { penjamin } from '../libs/db/penjamin';
// import { periode } from '../libs/db/periode';
// import { person } from '../libs/db/person';
// import { personType } from '../libs/db/persontype';
// import { poli } from '../libs/db/poli';
// import { position } from '../libs/db/position';
// import { product } from '../libs/db/product';
// import { productBrand } from '../libs/db/productbrand';
// import { productColor } from '../libs/db/productcolor';
// import { productContainer } from '../libs/db/productcontainer';
// import { productGrade } from '../libs/db/productgrade';
// import { productGroup } from '../libs/db/productgroup';
// import { productPrice } from '../libs/db/productprice';
// import { productSize } from '../libs/db/productsize';
// import { productStandard } from '../libs/db/productstandard';
// import { productTaste } from '../libs/db/productTaste';
// import { productType } from '../libs/db/producttype';
// import { project } from '../libs/db/project';
// import { promotion } from '../libs/db/promotion';
// import { promotionCategory } from '../libs/db/promotioncategory.';
// import { proses } from '../libs/db/proses';
// import { province } from '../libs/db/province';
// import { purchaseHeader } from '../libs/db/purchaseheader';
// import { purchaseInvoice } from '../libs/db/purchaseinvoice';
// import { purchaseOrder } from '../libs/db/purchaseorder';
// import { purchasePayment } from '../libs/db/purchasepayment';
// import { purchasePlan } from '../libs/db/purchaseplan';
// import { purchasePlanDetail } from '../libs/db/purchaseplandetail';
// import { purchaseReceipt } from '../libs/db/purchasereceipt.';
// import { purchaseReturn } from '../libs/db/purchasereturn';
// import { rayon } from '../libs/db/rayon';
// import { region } from '../libs/db/region';
// import { registration } from '../libs/db/registration';
// import { religion } from '../libs/db/religion';
// import { rmItem } from '../libs/db/rmItem';
// import { room } from '../libs/db/room';
// import { roomCategory } from '../libs/db/roomcategory';
// import { roomType } from '../libs/db/roomtype';
// import { salesInvoice } from '../libs/db/salesinvoice';
// import { salesOrder } from '../libs/db/salesorder';
// import { salesPayment } from '../libs/db/salespayment';
// import { salesReceipt } from '../libs/db/salesreceipt';
// import { salesReturn } from '../libs/db/salesreturn';
// import { satuan } from '../libs/db/satuan';
// import { shiftKerja } from '../libs/db/shiftkerja';
// import { site } from '../libs/db/site';
// import { skill } from '../libs/db/skill';
// import { statement } from '../libs/db/statement';
// import { student } from '../libs/db/student';
// import { subDistrict } from '../libs/db/subdistrict';
// import { supplier } from '../libs/db/supplier';
// import { telinga } from '../libs/db/telinga';
// import { tenggorokan } from '../libs/db/tenggorokan';
// import { thorak } from '../libs/db/thorak';
// import { treatment } from '../libs/db/treatment';
// import { treatmentType } from '../libs/db/treatmenttype';
// import { tulangPunggung } from '../libs/db/tulang-punggung';
// import { unit } from '../libs/db/unit';
// import { vendor } from '../libs/db/vendor';
// import { vendorItem } from '../libs/db/vendoritem';
// import { agent } from '../libs/db/agent';
// import { permissionPolicyUser } from '../libs/db/permissionpolicyuser';
// import { employeeProject } from 'src/libs/db/employee-project';
// import { employmentStatus } from 'src/libs/db/employment-status';
// import { jobTitle } from 'src/libs/db/job-title';
// import { payGrade } from 'src/libs/db/pay-grade';
// import { overTimeRequest } from 'src/libs/db/overtimerequest';
// import { overTimeCategory } from 'src/libs/db/overtimecategory';
// import { imageFile } from 'src/libs/db/imageFile';

// @Injectable()
// export class GeneralRepositoryService {
//   permissionPolicUser() {
//     return getRepository(permissionPolicyUser);
//   }
//   productCategory() {
//     return getRepository(productCategory);
//   }
//   bank() {
//     return getRepository(bank);
//   }
//   area() {
//     return getRepository(area);
//   }
//   branch() {
//     return getRepository(branch);
//   }
//   // categoryPrice() {
//   //     return getRepository(CategoryPrice);
//   // }
//   city() {
//     return getRepository(city);
//   }
//   company() {
//     return getRepository(company);
//   }
//   country() {
//     return getRepository(country);
//   }
//   customer() {
//     return getRepository(customer);
//   }
//   customerAddress() {
//     return getRepository(customerAddress);
//   }
//   customerContact() {
//     return getRepository(customerContact);
//   }
//   customerCredit() {
//     return getRepository(customerCredit);
//   }
//   district() {
//     return getRepository(district);
//   }
//   mesin() {
//     return getRepository(mesin);
//   }
//   ethnicity() {
//     return getRepository(ethnicity);
//   }
//   imageFile() {
//     return getRepository(imageFile);
//   }
  
//   nationality() {
//     return getRepository(nationality);
//   }
//   partner() {
//     return getRepository(partner);
//   }
//   proses() {
//     return getRepository(proses);
//   }
//   province() {
//     return getRepository(province);
//   }
//   rayon() {
//     return getRepository(rayon);
//   }
//   region() {
//     return getRepository(region);
//   }
//   religion() {
//     return getRepository(religion);
//   }
//   satuan() {
//     return getRepository(satuan);
//   }
//   site() {
//     return getRepository(site);
//   }
//   subDistrict() {
//     return getRepository(subDistrict);
//   }
//   completenes() {
//     return getRepository(completenes);
//   }
//   statement() {
//     return getRepository(statement);
//   }
//   unit() {
//     return getRepository(unit);
//   }
//   supplier() {
//     return getRepository(supplier);
//   }
//   vendor() {
//     return getRepository(vendor);
//   }
//   vendorItem() {
//     return getRepository(vendorItem);
//   }
//   news() {
//     return getRepository(news);
//   }
//   newsCategory() {
//     return getRepository(newsCategory);
//   }
//   person() {
//     return getRepository(person);
//   }
//   personType() {
//     return getRepository(personType);
//   }
//   member() {
//     return getRepository(member);
//   }
//   memberType() {
//     return getRepository(memberType);
//   }
//   promotion() {
//     return getRepository(promotion);
//   }
//   promotionCategory() {
//     return getRepository(promotionCategory);
//   }
//   cashIn() {
//     return getRepository(cashIn);
//   }
//   cashInDetail() {
//     return getRepository(cashInDetail);
//   }
//   periode() {
//     return getRepository(periode);
//   }
//   cashOut() {
//     return getRepository(cashOut);
//   }
//   cashOutDetail() {
//     return getRepository(cashOutDetail);
//   }
//   // hospital
//   doctor() {
//     return getRepository(doctor);
//   }
//   doctorService() {
//     return getRepository(doctorService);
//   }
//   treatmentType() {
//     return getRepository(treatmentType);
//   }
//   abdomen() {
//     return getRepository(abdomen);
//   }
//   entity() {
//     return getRepository(entity);
//   }
//   bed() {
//     return getRepository(bed);
//   }
//   disease() {
//     return getRepository(disease);
//   }
//   doctorFee() {
//     return getRepository(doctorFee);
//   }
//   family() {
//     return getRepository(family);
//   }
//   fisik() {
//     return getRepository(fisik);
//   }
//   genitalia() {
//     return getRepository(genitalia);
//   }
//   hidung() {
//     return getRepository(hidung);
//   }
//   hospital() {
//     return getRepository(hospital);
//   }
//   icd10() {
//     return getRepository(icd10);
//   }
//   kebiasaan() {
//     return getRepository(kebiasaan);
//   }
//   kesehatan() {
//     return getRepository(kesehatan);
//   }
//   kulit() {
//     return getRepository(kulit);
//   }
//   laboratorium() {
//     return getRepository(laboratorium);
//   }
//   leher() {
//     return getRepository(leher);
//   }
//   limfe() {
//     return getRepository(limfe);
//   }
//   mata() {
//     return getRepository(mata);
//   }
//   classRoom() {
//     return getRepository(classRoom);
//   }
//   medical() {
//     return getRepository(medical);
//   }
//   mental() {
//     return getRepository(mental);
//   }
//   muka() {
//     return getRepository(muka);
//   }
//   mulut() {
//     return getRepository(mulut);
//   }
//   neumuskoloskeletal() {
//     return getRepository(neumuskoloskeletal);
//   }
//   pekerjaan() {
//     return getRepository(pekerjaan);
//   }
//   pekerjaanLapangan() {
//     return getRepository(pekerjaanLapangan);
//   }
//   pekerjaanOffice() {
//     return getRepository(pekerjaanOffice);
//   }
//   penjamin() {
//     return getRepository(penjamin);
//   }
//   poli() {
//     return getRepository(poli);
//   }
//   registration() {
//     return getRepository(registration);
//   }
//   telinga() {
//     return getRepository(telinga);
//   }
//   tenggorokan() {
//     return getRepository(tenggorokan);
//   }
//   thorak() {
//     return getRepository(thorak);
//   }
//   treatment() {
//     return getRepository(treatment);
//   }
//   tulangPunggung() {
//     return getRepository(tulangPunggung);
//   }
//   // general Hospital
//   currency() {
//     return getRepository(currency);
//   }
//   currencyRate() {
//     return getRepository(currencyRate);
//   }
//   facilitie() {
//     return getRepository(facilitie);
//   }
//   feature() {
//     return getRepository(feature);
//   }
//   room() {
//     return getRepository(room);
//   }
//   roomCategory() {
//     return getRepository(roomCategory);
//   }
//   roomType() {
//     return getRepository(roomType);
//   }
//   departemen() {
//     return getRepository(departemen);
//   }
//   division() {
//     return getRepository(division);
//   }
//   project() {
//     return getRepository(project);
//   }
//   employeeProject() {
//     return getRepository(employeeProject);
//   }
//   overTimeRequest() {
//     return getRepository(overTimeRequest);
//   }
//   overTimeCategory() {
//     return getRepository(overTimeCategory);
//   }
//   client() {
//     return getRepository(client);
//   }
//   certification() {
//     return getRepository(certification);
//   }
//   education() {
//     return getRepository(education);
//   }
//   skill() {
//     return getRepository(skill);
//   }
//   language() {
//     return getRepository(language);
//   }
//   employee() {
//     return getRepository(employee);
//   }
//   employmentStatus() {
//     return getRepository(employmentStatus);
//   }
//   jobTitle() {
//     return getRepository(jobTitle);
//   }
//   payGrade() {
//     return getRepository(payGrade);
//   }

//   position() {
//     return getRepository(position);
//   }
//   shiftKerja() {
//     return getRepository(shiftKerja);
//   }
//   // pavilion
//   agent() {
//     return getRepository(agent);
//   }
//   house() {
//     return getRepository(house);
//   }
//   houseCategory() {
//     return getRepository(houseCategory);
//   }
//   houseFeature() {
//     return getRepository(houseFeature);
//   }
//   // Manufacturing
//   atum() {
//     return getRepository(atum);
//   }
//   categoryCorrection() {
//     return getRepository(categoryCorrection);
//   }
//   categoryIn() {
//     return getRepository(categoryIn);
//   }
//   categoryOut() {
//     return getRepository(categoryOut);
//   }
//   categoryPrice() {
//     return getRepository(categoryPrice);
//   }
//   product() {
//     return getRepository(product);
//   }
//   productSize() {
//     return getRepository(productSize);
//   }
//   productTaste() {
//     return getRepository(productTaste);
//   }
//   productBrand() {
//     return getRepository(productBrand);
//   }
//   productColor() {
//     return getRepository(productColor);
//   }
//   productContainer() {
//     return getRepository(productContainer);
//   }
//   productGrade() {
//     return getRepository(productGrade);
//   }
//   productGroup() {
//     return getRepository(productGroup);
//   }
//   productPrice() {
//     return getRepository(productPrice);
//   }
//   productStandard() {
//     return getRepository(productStandard);
//   }
//   productType() {
//     return getRepository(productType);
//   }

//   purchaseHeader() {
//     return getRepository(purchaseHeader);
//   }
//   purchaseInvoice() {
//     return getRepository(purchaseInvoice);
//   }
//   purchaseOrder() {
//     return getRepository(purchaseOrder);
//   }
//   purchasePlan() {
//     return getRepository(purchasePlan);
//   }
//   purchasePlanDetail() {
//     return getRepository(purchasePlanDetail);
//   }
//   purchaseReceipt() {
//     return getRepository(purchaseReceipt);
//   }
//   purchaseReturn() {
//     return getRepository(purchaseReturn);
//   }
//   purchasePayment() {
//     return getRepository(purchasePayment);
//   }
//   rmItem() {
//     return getRepository(rmItem);
//   }
//   salesInvoice() {
//     return getRepository(salesInvoice);
//   }
//   salesOrder() {
//     return getRepository(salesOrder);
//   }
//   salesPayment() {
//     return getRepository(salesPayment);
//   }
//   salesReceipt() {
//     return getRepository(salesReceipt);
//   }
//   salesReturn() {
//     return getRepository(salesReturn);
//   }
//   course() {
//     return getRepository(course);
//   }
//   examination() {
//     return getRepository(examination);
//   }
//   student() {
//     return getRepository(student);
//   }

//   borrowing() {
//     return getRepository(borrowing);
//   }
//   brand() {
//     return getRepository(brand);
//   }
//   locationArea() {
//     return getRepository(locationArea);
//   }
//   mutasi() {
//     return getRepository(mutasi);
//   }
//   officer() {
//     return getRepository(officer);
//   }
//   opname() {
//     return getRepository(opname);
//   }
//   pengadaan() {
//     return getRepository(pengadaan);
//   }
//   inventaris() {
//     return getRepository(inventaris);
//   }
// }
