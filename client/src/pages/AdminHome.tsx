import { useEffect, useState } from 'react';
import { apiFetch } from '../api/client';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';

export default function AdminHome() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    apiFetch<{ message: string }>('/admin/home')
      .then((d) => setMessage(d.message))
      .catch(() => setMessage('Could not load'));
  }, []);

  return (
    <Layout title="Admin dashboard">
      <p className="muted">{message}</p>
      <div className="grid">
        <FeatureCard title="Projects" week={2}>
          Create and manage projects for every client.
        </FeatureCard>
        <FeatureCard title="Milestones" week={3}>
          Track progress and reorder milestones.
        </FeatureCard>
        <FeatureCard title="Invoices" week={6}>
          Create invoices and see what is owed.
        </FeatureCard>
        <FeatureCard title="Activity feed" week={7}>
          See everything happening across all clients.
        </FeatureCard>
      </div>
    </Layout>
  );
}