export interface ISuppliers {
    id: number;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: {
        street: string;
        city: string;
        region: string;
        postalCode: number;
        country: string;
        phone: string;
    }
}