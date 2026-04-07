// src/interfaces/index.ts

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface Product {
  // Obligatorios
  sku: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: boolean;
  category: string;
  image: string;
  createdAt: Date;
  
  // Opcionales
  tags?: string[];
  dimensions?: Dimensions;
  description?: string;
}

export interface User {
  // Obligatorios
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: 'admin' | 'customer';
  address: Address;
  createdAt: Date;
  
  // Opcionales
  tags?: string[];
  description?: string;
}
