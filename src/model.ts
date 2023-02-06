export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export interface SortKVP {
  key: 'id' | 'name' | 'price' | 'qty';
  direction: SortDirection;
}

export enum SortDirection {
  ASC = 'ascending',
  DESC = 'descending',
}
