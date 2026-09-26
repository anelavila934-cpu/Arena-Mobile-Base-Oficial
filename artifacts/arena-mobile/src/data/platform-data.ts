/**
 * Official-platform contracts live here so UI previews can be replaced by
 * authenticated Arena services without changing the product shell.
 */
export interface ArenaUser {
  id: string;
  handle: string;
  displayName: string;
  avatarUrl?: string;
  region?: string;
  mainGame?: string;
  bio?: string;
}

export type ArenaProfileInput = Pick<
  ArenaUser,
  'handle' | 'region' | 'mainGame' | 'bio'
>;

export interface RankingEntry {
  userId: string;
  handle: string;
  game: string;
  rank: number;
  rating: number;
}

export interface StreamEntry {
  id: string;
  title: string;
  channel: string;
  game: string;
  viewerCount: number;
  isLive: boolean;
}

export interface TournamentEntry {
  id: string;
  title: string;
  game: string;
  startAt: string;
  status: 'open' | 'upcoming' | 'complete';
}

export interface EventEntry {
  id: string;
  title: string;
  summary: string;
  startsAt: string;
  kind: 'broadcast' | 'tournament' | 'community' | 'championship';
  status: 'scheduled' | 'live' | 'complete';
}

export interface NewsEntry {
  id: string;
  title: string;
  excerpt: string;
  category: 'arena' | 'competition' | 'community';
  publishedAt: string;
}

export interface ArenaPreferences {
  motion: boolean;
  alerts: boolean;
  compact: boolean;
}

export interface ArenaNotice {
  id: string;
  title: string;
  body: string;
  tone: 'info' | 'system';
}

export const platformPreview = {
  modeLabel: 'DEMO / PREVIEW',
  seasonLabel: 'SEASON 01 // NOT LIVE',
  emptyCopy: 'Official Arena data will appear here once connected.',
  syncLabel: 'Awaiting official data link',
} as const;

// Future adapters should implement these methods against official sources only.
export interface ArenaDataSource {
  getCurrentUser(): Promise<ArenaUser | null>;
  saveProfile(input: ArenaProfileInput): Promise<ArenaUser>;
  getRankings(filters?: { game?: string; season?: string }): Promise<RankingEntry[]>;
  getStreams(filters?: { game?: string; query?: string }): Promise<StreamEntry[]>;
  getTournaments(): Promise<TournamentEntry[]>;
  getEvents(): Promise<EventEntry[]>;
  getNews(filters?: { category?: NewsEntry['category'] }): Promise<NewsEntry[]>;
  getPreferences(): Promise<ArenaPreferences>;
  savePreferences(preferences: ArenaPreferences): Promise<ArenaPreferences>;
}