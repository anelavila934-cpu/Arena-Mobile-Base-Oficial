import { useState } from 'react';
import { DemoPill, PageHeading } from '@/components/shell/page-heading';

export function NewsView() {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Arena', 'Competition', 'Community'];
  return <div><PageHeading kicker="Editorial desk" title="Noticias." description="A single source for the stories, signals, and decisions shaping the Arena." action={<div style={{ marginTop: 14 }}><DemoPill /></div>} /><div className="filter-row">{categories.map((item) => <button className={`filter-button ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)} key={item} data-testid={`button-news-filter-${item.toLowerCase()}`}>{item}</button>)}</div><div className="news-grid"><article className="surface news-card"><h3>The desk is standing by.</h3><p>Official Arena dispatches will appear here. / {category}</p></article><article className="surface news-card"><h3>Signal over noise.</h3><p>No fabricated headlines. / Preview editorial</p></article><article className="surface news-card"><h3>Write the next line.</h3><p>Verified community stories are coming. / Preview editorial</p></article></div></div>;
}