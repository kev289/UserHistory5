import { Card } from './components/Card';
import { Button } from './components/Button';
import { Badge } from './components/Badge';

export default function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
          Sistema de UI Reutilizable
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem', margin: 0 }}>
          Transición de CRUD a Componentes Modulares
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <Badge label="Semana 3" status="success" />
            <Badge label="Componentes Tipados" status="info" />
        </div>
      </header>
      
      <main>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          
          <Card
            title="Módulo de Usuarios"
            type="green"
            badgeLabel="Administrador"
            badgeStatus="success"
            imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=200"
            footer={
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Activo</span>
                <Button 
                  text="Ver Detalles" 
                  variant="primary" 
                  size="sm" 
                  onClick={() => alert(`Accediendo a módulo...`)}
                />
              </div>
            }
          />

          <Card
            title="Gestor de Roles"
            type="white"
            badgeLabel="Crítico"
            badgeStatus="error"
            imageUrl="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400&h=200"
            footer={
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Requiere revisión</span>
                <Button 
                  text="Auditar" 
                  variant="danger" 
                  size="sm" 
                  onClick={() => alert(`Iniciando auditoría...`)}
                />
              </div>
            }
          />

          <Card
            title="Configuración Global"
            type="black"
            badgeLabel="Estable"
            badgeStatus="neutral"
            imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=200"
            footer={
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Sistema Base</span>
                <Button 
                  text="Configurar" 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => alert(`Abriendo ajustes...`)}
                />
              </div>
            }
          />

        </div>
      </main>

    </div>
  );
}
