import { Button } from 'components';
import React from 'react';
import { ITable } from 'types/table';

const Table = ({ columns, data, itemDeleteClick }: ITable) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const handleRowsPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value);
  };

  return (
    <table className='w-full px-2'>
      <thead className='border-b-1 border-gray-900'>
        <tr className='text-left text-gray-500'>
          {columns.map((column, index) => (
            <th className='py-2 uppercase text-xs' key={index}>
              {column.title}
            </th>
          ))}
          <th className='py-2 uppercase text-xs'>Actions</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        {currentRows.map((row, index) => (
          <tr key={index} className='hover:bg-gray-100 text-sm'>
            <td className='py-2'>{row.companyName}</td>
            <td>{row.contactName}</td>
            <td>{row.contactTitle}</td>
            <td>{row.address.city}</td>
            <td>{row.address.region}</td>
            <td>{row.address.postalCode}</td>
            <td>{row.address.country}</td>
            <td>{row.address.phone}</td>
            <td>
              <Button
                text='Delete'
                className='bg-red-500'
                onClick={() => itemDeleteClick(row.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={columns.length + 1} className='py-4 text-xs'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
                <span className='text-sm text-gray-500'>Rows per page:</span>
                <select
                  className='ml-2 text-sm text-gray-500'
                  value={rowsPerPage}
                  onChange={handleRowsPerPageChange}
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <div className='flex items-center justify-center'>
                <span className='text-sm text-gray-500'>
                  Page {currentPage} of {Math.ceil(data.length / rowsPerPage)}
                </span>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  className='px-2 py-1 text-white bg-blue-500 rounded-md'
                  onClick={() => handlePageChange(null, currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  className='ml-2 px-2 py-1 text-white bg-blue-500 rounded-md'
                  onClick={() => handlePageChange(null, currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(data.length / rowsPerPage)
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
