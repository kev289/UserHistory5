// src/components/ProductCard.tsx
import React from 'react';
import type { Product } from '../interfaces';

// Cumplimos con el CA_10 de tipar estrictamente las Props
export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px 0', borderRadius: '8px', maxWidth: '250px' }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', borderRadius: '4px' }} 
      />
      <h3>{product.name}</h3>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
};
