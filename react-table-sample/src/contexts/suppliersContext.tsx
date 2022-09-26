import React, { createContext, useContext } from 'react';
import { getSuppliers } from 'services/supplierServices';

const initialState: { suppliers: any[]; setSuppliers: any } = {
  suppliers: [],
  setSuppliers: () => {}
};

const SuppliersContext = createContext(initialState);

export const SuppliersProvider = ({ children }: any) => {
  const [suppliers, setSuppliers] = React.useState([]);

  const fetchSuppliers = async () => {
    const data = await getSuppliers();
    setSuppliers(data);
  };

  React.useEffect(() => {
    fetchSuppliers();
  }, []);

  const contextValue = {
    suppliers,
    setSuppliers
  };

  return (
    <SuppliersContext.Provider value={contextValue}>
      {children}
    </SuppliersContext.Provider>
  );
};

export const useSuppliers = () => useContext(SuppliersContext);

export default SuppliersContext;
