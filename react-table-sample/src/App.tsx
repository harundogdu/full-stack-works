import { Button, Input, Text } from 'components';
import { Table } from 'containers';
import { useSuppliers } from 'contexts/suppliersContext';
import { TableHeader } from 'utils/table-helper';

function App() {
  const {
    loading,
    currentSupplier,
    setCurrentSupplier,
    handleFilteredSuppliers,
    filteredSuppliers,
    handleRemoveAll,
    handleDeleteCurrentItemClick
  } = useSuppliers();

  return (
    <div className='flex items-center justify-center w-full h-full min-h-screen'>
      <div className='flex flex-col w-10/12 h-full items-center justify-center'>
        <div
          id='header'
          className='flex w-full items-center justify-between bg-gray-100 p-2'
        >
          <div id='left' className='flex flex-col w-full'>
            <Text text='Suppliers' type='3xl' weight='bold' />
            <Text text='List of suppliers' type='xl' />
          </div>
          <div
            id='right'
            className='flex flex-row w-full justify-end space-x-4 py-2'
          >
            <div className='flex items-center justify-center'>
              <Input
                value={currentSupplier}
                onChange={setCurrentSupplier}
                placeholder='Search supplier'
              />
              <Button
                text='Search'
                onClick={handleFilteredSuppliers}
                className='ml-2 bg-blue-500'
              />
            </div>
            <Button text='Remove All' onClick={handleRemoveAll} />
          </div>
        </div>
        {loading ? (
          <div className='flex items-center justify-center w-full h-full'>
            <Text text='Loading...' type='xl' />
          </div>
        ) : (
          <Table
            columns={TableHeader}
            data={filteredSuppliers}
            itemDeleteClick={handleDeleteCurrentItemClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
