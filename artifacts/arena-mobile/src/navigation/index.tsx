import { CalendarDays, Home, Newspaper, Radio, Settings, Shield, Trophy, UserRound, type LucideIcon } from 'lucide-react';
import { Link } from 'wouter';

export interface NavigationItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavigationItem[] = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/perfil', label: 'Perfil', icon: UserRound },
  { path: '/ranking', label: 'Ranking', icon: Trophy },
  { path: '/streaming', label: 'Streaming', icon: Radio },
  { path: '/torneos', label: 'Torneos', icon: Shield },
  { path: '/eventos', label: 'Eventos', icon: CalendarDays },
  { path: '/noticias', label: 'Noticias', icon: Newspaper },
  { path: '/configuracion', label: 'Configuración', icon: Settings },
];

export function NavigationLink({ item, active, onClick }: { item: NavigationItem; active: boolean; onClick?: () => void }) {
  const Icon = item.icon;
  return (
    <Link href={item.path} className={`nav-item ${active ? 'active' : ''}`} onClick={onClick} data-testid={`link-${item.label.toLowerCase()}`}>
      <Icon className="nav-icon" />
      <span>{item.label}</span>
    </Link>
  );
}