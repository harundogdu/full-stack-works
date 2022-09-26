import axios from "axios";

const baseUrl = "https://northwind.vercel.app/api/suppliers";

export const getSuppliers = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}