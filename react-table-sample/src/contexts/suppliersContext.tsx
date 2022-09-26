import React, { createContext, useContext } from 'react';
import { getSuppliers } from 'services/supplierServices';
import { ISuppliers } from 'types/suppliersType';

const initialState = {
  suppliers: [],
  setSuppliers: () => {},
  loading: false,
  setLoading: () => {},
  currentSupplier: '',
  setCurrentSupplier: () => {},
  handleFilteredSuppliers: () => {},
  filteredSuppliers: [],
  handleRemoveAll: () => {},
  handleDeleteCurrentItemClick: () => {},
};

const SuppliersContext = createContext(initialState);

export const SuppliersProvider = ({ children }: any) => {
  const [suppliers, setSuppliers] = React.useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = React.useState(suppliers);
  const [currentSupplier, setCurrentSupplier] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const handleFilteredSuppliers = () => {
    const filtered = suppliers.filter(
      (supplier: ISuppliers) =>
        supplier.companyName
          .toLowerCase()
          .includes(currentSupplier.toLowerCase()) ||
        supplier.contactName
          .toLowerCase()
          .includes(currentSupplier.toLowerCase()) ||
        supplier.contactTitle
          .toLowerCase()
          .includes(currentSupplier.toLowerCase()) ||
        supplier.address.city
          .toLowerCase()
          .includes(currentSupplier.toLowerCase())
    );
    setFilteredSuppliers(filtered);
  };

  const handleRemoveAll = () => {
    setFilteredSuppliers([]);
  };

  const handleDeleteCurrentItemClick = (id: number) => {
    const filtered = filteredSuppliers.filter(
      (supplier: ISuppliers) => supplier.id !== id
    );
    setFilteredSuppliers(filtered);
  };

  const fetchSuppliers = async () => {
    try {
      setLoading(true);
      const supplier = await getSuppliers();
      setSuppliers(supplier);
      setFilteredSuppliers(supplier);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSuppliers();
  }, []);

  const contextValue = {
    loading,
    currentSupplier,
    setCurrentSupplier,
    handleFilteredSuppliers,
    filteredSuppliers,
    handleRemoveAll,
    handleDeleteCurrentItemClick
  };

  return (
    // @ts-ignore
    <SuppliersContext.Provider value={contextValue}>
      {children}
    </SuppliersContext.Provider>
  );
};

export const useSuppliers = () => useContext(SuppliersContext);

export default SuppliersContext;
