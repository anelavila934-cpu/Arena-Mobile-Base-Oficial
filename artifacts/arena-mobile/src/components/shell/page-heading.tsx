import { type ReactNode } from 'react';
import { platformPreview } from '@/data/platform-data';

export function PageHeading({ kicker, title, description, action }: { kicker: string; title: string; description: string; action?: ReactNode }) {
  return (
    <div className="section-heading reveal">
      <div>
        <div className="eyebrow"><span className="heading-mark" />{kicker}</div>
        <h1 data-testid={`heading-${title.toLowerCase()}`}>{title}</h1>
      </div>
      <div>
        <p>{description}</p>
        {action}
      </div>
    </div>
  );
}

export function DemoPill() {
  return <span className="demo-pill" data-testid="status-demo-preview">{platformPreview.modeLabel}</span>;
}