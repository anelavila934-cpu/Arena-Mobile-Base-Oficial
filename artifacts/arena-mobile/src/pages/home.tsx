import { type ReactNode } from 'react';
import { ChevronRight, Info, Radio, Sparkles, Trophy, X } from 'lucide-react';
import { Link } from 'wouter';
import { DemoPill, PageHeading } from '@/components/shell/page-heading';

export function HomeView({ noticeOpen, onDismiss }: { noticeOpen: boolean; onDismiss: () => void }) {
  return (
    <div className="reveal">
      {noticeOpen && <div className="notice" data-testid="notice-system"><Info size={17} /><span><strong>Platform preview mode.</strong> Arena is ready for official data sources. This workspace contains no live players, rankings, streams, or results.</span><button className="notice-close" onClick={onDismiss} aria-label="Dismiss notice" data-testid="button-dismiss-notice"><X size={15} /></button></div>}
      <PageHeading kicker="Arena command center" title="Welcome back." description="Your competitive operating system — everything you need before the lights go up." action={<div style={{ marginTop: 14 }}><DemoPill /></div>} />
      <section className="surface home-hero">
        <div className="hero-copy">
          <div className="eyebrow">Signal / 01 <DemoPill /></div>
          <h2>Prepare.<br /><em>Compete.</em><br />Repeat.</h2>
          <p>The official Arena foundation is online. Connect your profile to unlock the full competitive layer.</p>
          <Link className="button-primary" href="/perfil" data-testid="link-build-profile">Build your profile <ChevronRight size={15} /></Link>
        </div>
        <div className="hero-meta">
          <div><div className="big-number">—</div><p>Live sessions<br />awaiting signal</p></div>
          <div className="status-line"><span className="status-dot" /> System ready</div>
        </div>
      </section>
      <div className="metric-row">
        <div className="metric"><strong>—</strong><span>Current rank</span></div>
        <div className="metric"><strong>—</strong><span>Events joined</span></div>
        <div className="metric"><strong>—</strong><span>Hours watched</span></div>
      </div>
      <div className="home-grid">
        <section className="surface">
          <div className="surface-header"><h2>Activity feed</h2><DemoPill /></div>
          <div className="surface-body">
            <div className="activity-list">
              <Activity icon={<Sparkles size={15} />} title="Personal feed is ready" copy="Connect an account to begin your Arena history." time="NOW" />
              <Activity icon={<Trophy size={15} />} title="Rankings are on standby" copy="Official ladder data will surface here." time="SYNC" />
              <Activity icon={<Radio size={15} />} title="Broadcast layer is clear" copy="Live channels appear once verified." time="WAIT" />
            </div>
          </div>
        </section>
        <div className="surface signal-card">
          <div className="eyebrow">Live telemetry</div>
          <h3>The signal is yours.</h3>
          <p>No artificial activity. No invented outcomes. Only the infrastructure for what comes next.</p>
          <div className="signal-bars" aria-label="Signal visualization">{[1,2,3,4,5,6,7].map((bar) => <span key={bar} />)}</div>
        </div>
      </div>
    </div>
  );
}

function Activity({ icon, title, copy, time }: { icon: ReactNode; title: string; copy: string; time: string }) {
  return <div className="activity"><div className="activity-mark">{icon}</div><div className="activity-copy"><strong>{title}</strong><span>{copy}</span></div><span className="activity-time">{time}</span></div>;
}