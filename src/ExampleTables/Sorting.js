import DataTable from 'react-data-table-component';
const columns = [
    
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
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
function Sorting() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};
export default Sorting;