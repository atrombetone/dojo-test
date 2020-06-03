import { BranchModel } from './branche.model';
import { EmployeeModel } from './employee.model';
import { ProductModel } from './product.model';

export interface CompanyModel {
    documentNumber: string;
    documentType: string;
    employees: EmployeeModel[];
    branchs: BranchModel[];
    productList: ProductModel[];
}