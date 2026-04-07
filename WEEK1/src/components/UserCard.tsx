// src/components/UserCard.tsx
import React from 'react';
import type { User } from '../interfaces';

export interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px 0', borderRadius: '8px', maxWidth: '250px' }}>
      <h3>{user.fullName}</h3>
      <p><strong>Rol:</strong> {user.role}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Ciudad:</strong> {user.address.city}</p>
    </div>
  );
};
