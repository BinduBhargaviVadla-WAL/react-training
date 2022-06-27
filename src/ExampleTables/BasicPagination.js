import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 3,
        title: 'Valkyrie',
        year: '1990',
    },
    {
        id: 4,
        title: 'Crocodile Dundee',
        year: '2001',
    },
    {
        id:5,
        title:"Ratatouille",
        year: '2007'
    }
]
const BasicPagination = () => {
    return (
        <DataTable
          columns={columns}
          data={data}
          pagination
        />
      );
}
export default BasicPagination;