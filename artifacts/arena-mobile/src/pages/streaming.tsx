import { useState } from 'react';
import { Radio, Search } from 'lucide-react';
import { DemoPill, PageHeading } from '@/components/shell/page-heading';

export function StreamingView() {
  const [tab, setTab] = useState('Featured');
  const [query, setQuery] = useState('');
  const tabs = ['Featured', 'Following', 'Clips'];
  return <div><PageHeading kicker="Broadcast network" title="Streaming." description="The broadcast floor for official Arena channels and verified competition." action={<div style={{ marginTop: 14 }}><DemoPill /></div>} /><div className="tab-line">{tabs.map((item) => <button key={item} className={`tab-button ${tab === item ? 'active' : ''}`} onClick={() => setTab(item)} data-testid={`tab-streams-${item.toLowerCase()}`}>{item}</button>)}</div><div className="search-box" style={{ width: '100%', maxWidth: 380, marginBottom: 20 }}><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter channels or games" data-testid="input-stream-search" /></div><section className="surface"><div className="surface-header"><h2>{tab} channels</h2><span className="eyebrow">{query ? `FILTER: ${query}` : 'NO FILTER'}</span></div><div className="surface-body"><div className="empty-panel"><div className="empty-orbit"><Radio size={20} /></div><h3>Broadcast floor clear</h3><p>Verified live streams will appear here. Arena does not invent channels, creators, viewer counts, or match outcomes.</p><button className="button-ghost" onClick={() => { setQuery(''); setTab('Featured'); }} data-testid="button-reset-streams">Reset view <Radio size={14} /></button></div></div></section></div>;
}