import type { ReactNode } from 'react';

export default function FeatureCard({
  title,
  week,
  children,
}: {
  title: string;
  week: number;
  children: ReactNode;
}) {
  return (
    <div className="card">
      <span className="tag">Week {week}</span>
      <h3>{title}</h3>
      <p className="muted">{children}</p>
    </div>
  );
}