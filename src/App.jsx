import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import UserSection from './pages/dashboard/UserSection';
import AdminSection from './pages/dashboard/AdminSection';
import NotFound from './pages/dashboard/NotFound';

import Register from './pages/auth/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas bajo /dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="profile" element={<UserSection />} />
          <Route path="change-password" element={<p>Aquí irá cambiar contraseña</p>} />
          <Route path="admin/users" element={<AdminSection />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Fallback para rutas no encontradas fuera de dashboard */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
