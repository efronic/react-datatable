import { useMemo, useState } from 'react';
import { Product, SortKVP, SortDirection } from './model';

const useSortableData = (items: Product[], config: SortKVP) => {
  const [sortKvp, setSortKvp] = useState<SortKVP>(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortKvp !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortKvp.key] < b[sortKvp.key]) {
          return sortKvp.direction === SortDirection.ASC ? -1 : 1;
        }
        if (a[sortKvp.key] > b[sortKvp.key]) {
          return sortKvp.direction === SortDirection.ASC ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortKvp]);

  const setSort = (key: 'id' | 'name' | 'price' | 'qty') => {
    let direction = SortDirection.ASC;
    if (
      sortKvp &&
      sortKvp.key === key &&
      sortKvp.direction === SortDirection.ASC
    ) {
      direction = SortDirection.DESC;
    }
    setSortKvp({ key, direction });
  };

  return { items: sortedItems, setSort: setSort, sortKvp: sortKvp };
};

export default useSortableData;
