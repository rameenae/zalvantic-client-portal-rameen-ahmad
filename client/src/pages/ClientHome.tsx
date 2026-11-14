import { useEffect, useState } from 'react';
import { apiFetch } from '../api/client';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';

export default function ClientHome() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    apiFetch<{ message: string }>('/client/home')
      .then((d) => setMessage(d.message))
      .catch(() => setMessage('Could not load'));
  }, []);

  return (
    <Layout title="My projects">
      <p className="muted">{message}</p>
      <div className="grid">
        <FeatureCard title="Your projects" week={2}>
          Your projects and their status will appear here.
        </FeatureCard>
        <FeatureCard title="Comments and files" week={4}>
          Talk to the team and share files.
        </FeatureCard>
        <FeatureCard title="Approvals" week={5}>
          Approve milestones or request changes.
        </FeatureCard>
        <FeatureCard title="Invoices" week={6}>
          View and download your invoices.
        </FeatureCard>
      </div>
    </Layout>
  );
}