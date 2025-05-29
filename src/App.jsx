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
        {/* Ruta pública de login */}
        <Route path="/" element={<Login />} />

        {/* Rutas protegidas bajo /dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Rutas hijas dentro del dashboard */}
          <Route path="profile" element={<UserSection />} />
          <Route path="change-password" element={<p>Aquí irá cambiar contraseña</p>} />
          <Route path="admin/users" element={<AdminSection />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
