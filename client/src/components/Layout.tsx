import type { ReactNode } from 'react';
import { useAuth } from '../auth/AuthContext';

export default function Layout({ title, children }: { title: string; children: ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <>
      <header className="header">
        <span className="brand">Zalvantic Client Portal</span>
        <div className="header-right">
          <span className={`badge badge-${user?.role}`}>{user?.role}</span>
          <span className="muted">{user?.email}</span>
          <button className="btn btn-outline" onClick={logout}>Log out</button>
        </div>
      </header>
      <main className="container">
        <h1>{title}</h1>
        {children}
      </main>
    </>
  );
}