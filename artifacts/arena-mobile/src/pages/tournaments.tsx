import { useState } from 'react';
import { ChevronRight, Compass, Shield } from 'lucide-react';
import { Link } from 'wouter';
import { DemoPill, PageHeading } from '@/components/shell/page-heading';

export function TournamentsView() {
  const [filter, setFilter] = useState('All');
  return <div><PageHeading kicker="Competition desk" title="Torneos." description="Enter official brackets, track your run, and find the next sanctioned challenge." action={<div style={{ marginTop: 14 }}><DemoPill /></div>} /><div className="filter-row">{['All', 'Open', 'Upcoming', 'Complete'].map((item) => <button key={item} className={`filter-button ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)} data-testid={`button-tournament-filter-${item.toLowerCase()}`}>{item}</button>)}</div><section className="surface"><div className="surface-header"><h2>{filter} competitions</h2><button className="button-ghost" onClick={() => setFilter('All')} data-testid="button-refresh-tournaments"><Compass size={14} /> Scan desk</button></div><div className="surface-body"><div className="empty-panel"><div className="empty-orbit"><Shield size={20} /></div><h3>Bracket bay empty</h3><p>Official tournaments and registration windows will appear here after the competition feed is connected.</p><Link className="button-primary" href="/eventos" data-testid="link-find-events">Explore events <ChevronRight size={14} /></Link></div></div></section></div>;
}