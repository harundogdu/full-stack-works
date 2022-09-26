import { Table } from 'containers';
import { useSuppliers } from 'contexts/suppliersContext';
import { TableHeader } from 'utils/table-helper';

function App() {
  const { suppliers, setSuppliers } = useSuppliers();

  return (
    <div className='flex items-center justify-center w-full h-full min-h-screen'>
      <Table columns={TableHeader} data={suppliers} />
    </div>
  );
}

export default App;
