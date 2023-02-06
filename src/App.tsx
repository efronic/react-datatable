import React from 'react';
import ProductTable from './ProductTable';
import './styles.css';

export default function App() {
  return (
    <div className='App'>
      <ProductTable
        products={[
          { id: 1, name: 'Book', price: 43.5, qty: 210 },
          { id: 2, name: 'Chair', price: 12.5, qty: 332 },
          { id: 3, name: 'Pencil', price: 22.5, qty: 122 },
          { id: 4, name: 'Highlighter', price: 34.9, qty: 19 },
          { id: 5, name: 'Pen', price: 10.9, qty: 919 },
          { id: 6, name: 'Pencil sharpener', price: 21.9, qty: 86 },
          { id: 7, name: 'Stapler', price: 9.9, qty: 121 },
        ]}
      />
    </div>
  );
}