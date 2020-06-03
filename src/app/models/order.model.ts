import { BranchModel } from './branche.model';
import { EmployeeModel } from './employee.model';
import { ProductModel } from './product.model';

export interface Order {    
    credit: string;
    product: ProductModel;
    branch: BranchModel;
    employees: EmployeeModel[];
}