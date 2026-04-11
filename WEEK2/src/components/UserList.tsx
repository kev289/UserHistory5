import { useState, useEffect } from 'react';
import { UserStore } from '../utils/UserStore';
import type { User } from '../interfaces/User';

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Instanciamos el UserStore (como pide tu Task 2)
    const store = new UserStore();
    // Llamamos al método list() que trae los usuarios y deja el log HTTP simulado
    setUsers(store.list());
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Lista de Usuarios</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li 
            key={user.id} 
            style={{ 
              border: '1px solid #ddd', 
              margin: '10px 0', 
              padding: '15px', 
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <strong>ID:</strong> {user.id} <br />
            <strong>Usuario:</strong> {user.UserName} <br />
            <strong>Rol:</strong> {user.role || 'No definido'} <br />
            <strong>Fecha creación:</strong> {user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
}
