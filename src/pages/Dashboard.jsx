import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard de {user.fullName}</h2>

      <nav>
        <ul>
          <li><Link to="profile">Mi perfil</Link></li>
          <li><Link to="change-password">Cambiar contraseña</Link></li>
          {isAdmin() && <li><Link to="admin/users">Gestionar usuarios</Link></li>}
        </ul>
      </nav>

      <hr />

      <Outlet /> {/* Aquí se renderizan las subrutas */}

      <hr />
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
