import { Product, SortDirection } from './model';
import useSortableData from './use-sortabledata';

const ProductTable: React.FC<{ products: Product[] }> = (props) => {
  const {
    items,
    setSort,
    sortKvp: sortKVP,
  } = useSortableData(props.products, {
    key: 'name',
    direction: SortDirection.ASC,
  });
  const getClassNamesFor = (name: string) => {
    if (!sortKVP) {
      return;
    }
    return sortKVP.key === name ? sortKVP.direction : undefined;
  };
  return (
    <table>
      <caption>Our List</caption>
      <thead>
        <tr>
          <th>
            <button
              type='button'
              onClick={() => setSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => setSort('price')}
              className={getClassNamesFor('price')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => setSort('qty')}
              className={getClassNamesFor('qty')}
            >
              Quantity
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ProductTable;
