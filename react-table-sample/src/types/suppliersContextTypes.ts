import { ISuppliers } from "./suppliersType";

export interface ISupplierContext {
    suppliers: ISuppliers[];
    setSuppliers: React.Dispatch<React.SetStateAction<ISuppliers[]>>;
}