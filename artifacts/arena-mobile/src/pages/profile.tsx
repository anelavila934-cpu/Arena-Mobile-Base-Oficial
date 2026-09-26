import { useState } from 'react';
import { ChevronRight, Sparkles, UserRound, X } from 'lucide-react';
import { DemoPill, PageHeading } from '@/components/shell/page-heading';

export function ProfileView() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div>
      <PageHeading kicker="Identity module" title="Your profile." description="Your competitive identity, ready to be claimed. Keep your public presence precise." action={<div style={{ marginTop: 14 }}><DemoPill /></div>} />
      <div className="profile-layout">
        <section className="surface profile-card"><div className="eyebrow">Player identity</div><div className="profile-avatar">AM</div><h2>Unclaimed</h2><p>NO HANDLE CONNECTED<br />ARENA ID PENDING</p><button className="button-primary" onClick={() => setEditing(true)} data-testid="button-claim-profile"><UserRound size={14} /> Claim identity</button></section>
        <section className="surface">
          <div className="surface-header"><h2>Profile dossier</h2><span className="eyebrow">LOCAL PREVIEW</span></div>
          <div className="surface-body">
            {saved && <div className="notice" data-testid="status-profile-saved"><Sparkles size={15} /><span>Local preview saved. Official account connection is still required.</span><button className="notice-close" onClick={() => setSaved(false)} data-testid="button-dismiss-saved"><X size={14} /></button></div>}
            {editing ? <ProfileForm onSave={() => { setSaved(true); setEditing(false); }} onCancel={() => setEditing(false)} /> : <div className="empty-panel"><div className="empty-orbit"><UserRound size={20} /></div><h3>Identity locked</h3><p>Claim your Arena identity to prepare a public handle, region, and game profile. This preview stores nothing remotely.</p><button className="button-ghost" onClick={() => setEditing(true)} data-testid="button-start-profile">Start locally <ChevronRight size={14} /></button></div>}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProfileForm({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) {
  return <form onSubmit={(event) => { event.preventDefault(); onSave(); }}><div className="field-grid"><div className="field"><label htmlFor="handle">Arena handle</label><input id="handle" placeholder="Your handle" data-testid="input-profile-handle" /></div><div className="field"><label htmlFor="region">Region</label><input id="region" placeholder="Region or city" data-testid="input-profile-region" /></div><div className="field"><label htmlFor="game">Main game</label><input id="game" placeholder="Game title" data-testid="input-profile-game" /></div><div className="field"><label htmlFor="bio">Short bio</label><input id="bio" placeholder="What do you play for?" data-testid="input-profile-bio" /></div></div><div style={{ display: 'flex', justifyContent: 'flex-end', gap: 9, marginTop: 22 }}><button type="button" className="button-ghost" onClick={onCancel} data-testid="button-cancel-profile">Cancel</button><button type="submit" className="button-primary" data-testid="button-save-profile">Save preview <ChevronRight size={14} /></button></div></form>;
}