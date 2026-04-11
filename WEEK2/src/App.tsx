import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/login';
import { UserList } from './components/UserList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
}

export default App;
