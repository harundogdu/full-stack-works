import { ISuppliers } from "./suppliersType";

export interface ITableHeader {
    title: string;
    dataIndex: string;
}

export interface ITable {
    columns: ITableHeader[];
    data: ISuppliers[];
}