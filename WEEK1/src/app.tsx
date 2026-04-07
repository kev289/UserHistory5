// src/app.tsx
import { products, users } from './data/data';
import { ProductCard } from './components/ProductCard';
import { UserCard } from './components/UserCard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Catálogo de Productos</h1>
      
      {/* Listado de productos */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>

      <hr style={{ margin: '40px 0' }} />

      <h1>Usuarios</h1>
      
      {/* Listado de usuarios */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
