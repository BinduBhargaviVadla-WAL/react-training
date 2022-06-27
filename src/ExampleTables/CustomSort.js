const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.title.toLowerCase();
    const b = rowB.title.toLowerCase();

    if (a > b) {
        return 1;
    }

    if (b > a) {
        return -1;
    }

    return 0;
};

const columns = [
  {
    name: 'Quantity',
    selector: 'quantity',
    sortable: true,
    sortFunction: caseInsensitiveSort
  }
];
