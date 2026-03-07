import type { Metadata } from 'next';
import Taskbar from '@/components/Taskbar';

export const metadata: Metadata = {
  title: 'Folio — Pied Piper',
  description:
    'Your portfolio, built by AI in 60 seconds. Drop in your work history, agents write the copy and ship a live site.',
  alternates: { canonical: '/folio' },
};

export default function FolioPage() {
  return (
    <div className="bsod-page">
      <div className="page-window">
        <div className="title-bar" style={{ cursor: 'default' }}>
          <span>FOLIO_v1.0.exe — Agent-Built App</span>
          <div className="window-controls"><span>_</span><span>X</span></div>
        </div>
        <div className="window-content" style={{ maxHeight: 'none' }}>
          <div className="cmd-line">
            <span className="prompt">root@gilfoyle:~/apps/folio$</span>
            <span>./folio --info</span>
          </div>
          <br />
          <pre style={{ color: '#E0E0E0', lineHeight: 1.8 }}>
{`NAME:     Folio
STATUS:   `}<span style={{ color: '#39ff14' }}>● LIVE</span>{`
VERSION:  1.0.0
BUILT BY: Monica · Gilfoyle · Richard`}
          </pre>

          <br />
          <p style={{ color: '#aaaaff' }}>
            &gt; Your portfolio, built by AI in 60 seconds.
          </p>
          <br />

          <p style={{ color: '#E0E0E0', marginBottom: 12 }}>DESCRIPTION:</p>
          <p style={{ color: '#aaaaff', marginBottom: 16, lineHeight: 1.6 }}>
            Drop in your LinkedIn URL or paste your work history.<br />
            Folio&apos;s agent team writes the copy, picks the layout,<br />
            and ships a live portfolio — no templates, no drag-and-drop.
          </p>

          <p style={{ color: '#E0E0E0', marginBottom: 8 }}>WHAT AGENTS DO:</p>
          <div style={{ marginBottom: 20 }}>
            <p style={{ color: '#39ff14' }}>&gt; Monica   <span style={{ color: '#aaaaff' }}>→ writes your bio, case studies, project descriptions</span></p>
            <p style={{ color: '#39ff14' }}>&gt; Gilfoyle <span style={{ color: '#aaaaff' }}>→ picks the stack and deploys instantly</span></p>
            <p style={{ color: '#39ff14' }}>&gt; Richard  <span style={{ color: '#aaaaff' }}>→ positions you for the roles you actually want</span></p>
          </div>

          <div className="cmd-line">
            <span className="prompt">root@gilfoyle:~/apps/folio$</span>
            <span>./folio --start</span>
          </div>
          <br />
          <p style={{ color: '#E0E0E0', marginBottom: 8 }}>[INPUT] Paste LinkedIn URL or describe your work:</p>
          <input
            type="text"
            placeholder="https://linkedin.com/in/... or describe your work..."
            readOnly
            style={{
              width: '100%',
              background: 'rgba(0,0,0,0.4)',
              border: '1px solid #E0E0E0',
              color: '#E0E0E0',
              padding: '8px 12px',
              fontFamily: 'var(--font-vt323), monospace',
              fontSize: 18,
              outline: 'none',
              marginBottom: 8,
            }}
          />
          <p style={{ color: '#888', fontSize: 16 }}>
            &gt; Coming soon — agents are being briefed
          </p>

          <br />
          <div style={{ borderTop: '1px solid #333', paddingTop: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: '#888', fontSize: 15 }}>BUILT BY</span>
            {['Monica', 'Gilfoyle', 'Richard'].map((agent) => (
              <span
                key={agent}
                style={{
                  border: '1px solid #E0E0E0',
                  padding: '2px 10px',
                  color: '#aaaaff',
                  fontSize: 15,
                  fontFamily: 'var(--font-vt323), monospace',
                }}
              >
                {agent}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Taskbar />
    </div>
  );
}
