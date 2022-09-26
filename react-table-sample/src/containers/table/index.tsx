import { ITable } from 'types/table';

const Table = ({ columns, data }: ITable) => {
  return (
    <table className='w-9/12'>
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
        {data.splice(0, 10).map((row, index) => (
          <tr key={index} className='hover:bg-gray-100 text-sm'>
            <td>{row.companyName}</td>
            <td>{row.contactName}</td>
            <td>{row.contactTitle}</td>
            <td>{row.address.city}</td>
            <td>{row.address.region}</td>
            <td>{row.address.postalCode}</td>
            <td>{row.address.country}</td>
            <td>{row.address.phone}</td>
            <td>
              <button className='px-2 py-1 text-white bg-red-500 rounded-md'>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={9} className='py-2 text-center text-gray-500'>
            Showing 1 to 10 of {data.length} entries
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
