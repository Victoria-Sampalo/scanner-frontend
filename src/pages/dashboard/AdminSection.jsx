import { useAuth } from '../../context/AuthContext';

const AdminSection = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin()) {
    return <p>No tienes permiso para ver esta sección.</p>;
  }

  return (
    <div>
      <h3>🛠 Gestión de usuarios</h3>
      <p>Solo visible para administradores.</p>
    </div>
  );
};

export default AdminSection;
