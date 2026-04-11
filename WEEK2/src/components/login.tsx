import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authentication } from '../utils/auth.ts';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Evitamos que la página se recargue
    
    // Llamamos a la función de autenticación
    const user = authentication(username, password);
    
    if (user) {
      // Redirección en caso de éxito
      navigate('/users');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Iniciar Sesión</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <input 
            type="text" 
            placeholder="Usuario"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div>
          <input 
            type="password" 
            placeholder="Contraseña"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}
