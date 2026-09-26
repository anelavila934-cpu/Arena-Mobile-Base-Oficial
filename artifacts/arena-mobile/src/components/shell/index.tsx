import { type ReactNode, useState } from 'react';
import { Bell, ChevronRight, LayoutGrid, Menu, Search } from 'lucide-react';
import { Link, Route, Switch, useLocation } from 'wouter';
import { NAV_ITEMS, NavigationLink } from '@/navigation';
import { HomeView } from '@/pages/home';
import { ProfileView } from '@/pages/profile';
import { RankingView } from '@/pages/ranking';
import { StreamingView } from '@/pages/streaming';
import { TournamentsView } from '@/pages/tournaments';
import { EventsView } from '@/pages/events';
import { NewsView } from '@/pages/news';
import { SettingsView } from '@/pages/settings';

function EntryCover({ onEnter }: { onEnter: () => void }) {
  return (
    <main className="entry-cover" data-testid="entry-cover">
      <div className="entry-grid" />
      <span className="entry-corner top">AM / CORE PLATFORM / 001</span>
      <span className="entry-corner bottom">SYSTEM READY / FOUNDATION</span>
      <div className="entry-content">
        <img className="entry-logo" src="/assets/arena-mobile-official-logo.png" alt="Arena Mobile official logo" data-testid="img-official-logo" />
        <div className="entry-kicker">Official competitive gaming platform</div>
        <h1>Enter the <span>arena.</span></h1>
        <p>A command center for the next match, the next broadcast, and the next chapter of your game.</p>
        <button className="button-primary" onClick={onEnter} data-testid="button-enter-arena">
          Enter Arena <ChevronRight size={15} />
        </button>
        <div className="entry-meta">
          <span>Precision first</span><span>Built for competition</span><span>Signal online</span>
        </div>
      </div>
    </main>
  );
}

function NotFoundView() {
  return <div className="empty-panel"><div className="empty-orbit"><LayoutGrid size={20} /></div><h3>Module not found</h3><p>This route is outside the Arena grid.</p><Link href="/" className="button-primary" data-testid="link-return-home">Return to command center</Link></div>;
}

export function AppShell() {
  const [location] = useLocation();
  const [entered, setEntered] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const activeItem = NAV_ITEMS.find((item) => item.path === location) ?? NAV_ITEMS[0];

  if (!entered) return <EntryCover onEnter={() => setEntered(true)} />;

  return (
    <div className="arena-app">
      <div className="app-layout">
        <aside className="sidebar">
          <Link href="/" className="sidebar-brand" data-testid="link-brand">
            <img className="brand-mark" src="/assets/arena-mobile-official-logo.png" alt="Arena Mobile" />
            <div className="brand-wordmark">ARENA<span>MOBILE // HQ</span></div>
          </Link>
          <div className="nav-kicker">Command modules</div>
          <nav className="nav-list" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => <NavigationLink key={item.path} item={item} active={activeItem.path === item.path} />)}
          </nav>
          <div className="sidebar-foot">
            <div className="status-line"><span className="status-dot" /> Core system standby</div>
            <div className="micro-copy">Your official Arena account will sync here when connected.</div>
          </div>
        </aside>

        <div className="main-column">
          <header className="topbar">
            <div className="breadcrumb"><span>ARENA / </span><strong>{activeItem.label}</strong></div>
            <div className="header-actions">
              <label className={`search-box ${searchOpen ? 'search-active' : ''}`} htmlFor="global-search">
                <Search size={15} />
                <input id="global-search" type="search" placeholder="Search Arena" onFocus={() => setSearchOpen(true)} data-testid="input-global-search" />
              </label>
              <button className="icon-button" onClick={() => setNoticeOpen(true)} aria-label="Open notifications" data-testid="button-open-notifications"><Bell size={16} /></button>
              <button className="icon-button mobile-menu" onClick={() => setMobileMenu((value) => !value)} aria-label="Toggle menu" data-testid="button-mobile-menu"><Menu size={17} /></button>
            </div>
          </header>
          {mobileMenu && (
            <div className="surface mobile-menu-panel" style={{ position: 'absolute', right: 15, top: 63, zIndex: 10, padding: 8 }}>
              {NAV_ITEMS.slice(0, 5).map((item) => <NavigationLink key={item.path} item={item} active={item.path === activeItem.path} onClick={() => setMobileMenu(false)} />)}
            </div>
          )}
          <main className="content">
            <Switch>
              <Route path="/" component={() => <HomeView noticeOpen={noticeOpen} onDismiss={() => setNoticeOpen(false)} />} />
              <Route path="/perfil" component={ProfileView} />
              <Route path="/ranking" component={RankingView} />
              <Route path="/streaming" component={StreamingView} />
              <Route path="/torneos" component={TournamentsView} />
              <Route path="/eventos" component={EventsView} />
              <Route path="/noticias" component={NewsView} />
              <Route path="/configuracion" component={SettingsView} />
              <Route component={NotFoundView} />
            </Switch>
          </main>
        </div>
      </div>
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {NAV_ITEMS.slice(0, 5).map((item) => {
          const Icon = item.icon;
          return <Link href={item.path} key={item.path} className={`mobile-nav-item ${activeItem.path === item.path ? 'active' : ''}`} data-testid={`mobile-link-${item.label.toLowerCase()}`}><Icon /><span>{item.label}</span></Link>;
        })}
      </nav>
    </div>
  );
}
