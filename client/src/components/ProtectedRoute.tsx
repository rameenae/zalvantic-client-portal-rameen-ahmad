import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function ProtectedRoute({
  role,
  children,
}: {
  role: 'admin' | 'client';
  children: ReactNode;
}) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) {
    return <Navigate to={user.role === 'admin' ? '/admin' : '/client'} replace />;
  }
  return <>{children}</>;
}