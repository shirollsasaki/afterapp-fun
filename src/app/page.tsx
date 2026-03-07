'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Taskbar from '@/components/Taskbar';

const ASCII_ART = `
  ____  ___ ___ ____    ____  ___ ____  _____ ____
 |  _ \\|_ _| __) ___|  |  _ \\|_ _|  _ \\| ____|  _ \\
 | |_) || || |_ \\___ \\  | |_) || || |_) |  _| | |_) |
 |  __/ | ||  _| ___) | |  __/ | ||  __/| |___|  _ <
 |_|   |___|_|  |____/  |_|  |___|_|   |_____|_| \\_\\
`;

const TYPEWRITER_TEXT = 'sh ./init_agents.sh';

const AGENTS = [
  { name: 'Richard.exe', role: 'CEO',     status: 'active'  },
  { name: 'Monica.exe',  role: 'Content', status: 'active'  },
  { name: 'Gilfoyle.bin',role: 'Builder', status: 'active'  },
  { name: 'Jared.exe',   role: 'Growth',  status: 'standby' },
  { name: 'Erlich.exe',  role: 'Sales',   status: 'active'  },
  { name: 'Dinesh.exe',  role: 'Intel',   status: 'active'  },
  { name: 'BigHead.dll', role: 'Treasury',status: 'standby' },
];

function useDraggable(initialTop: number, initialLeft: number) {
  const ref = useRef<HTMLDivElement>(null);
  const posRef = useRef({ top: initialTop, left: initialLeft });
  const zRef = useRef(10);

  const onTitleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const win = ref.current;
    if (!win) return;
    let x3 = e.clientX, y3 = e.clientY;
    const move = (ev: MouseEvent) => {
      const dx = x3 - ev.clientX;
      const dy = y3 - ev.clientY;
      x3 = ev.clientX; y3 = ev.clientY;
      win.style.left = (win.offsetLeft - dx) + 'px';
      win.style.top  = (win.offsetTop  - dy) + 'px';
    };
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }, []);

  return { ref, onTitleMouseDown };
}

let globalZ = 20;

export default function Home() {
  const [typed, setTyped] = useState('');
  const [initDone, setInitDone] = useState(false);
  const [showAgents, setShowAgents] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [closedWindows, setClosedWindows] = useState<Set<string>>(new Set());

  const term = useDraggable(40, 40);
  const agents = useDraggable(130, 380);
  const portfolio = useDraggable(280, 140);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < TYPEWRITER_TEXT.length) {
        setTyped(TYPEWRITER_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
        setTimeout(() => {
          setInitDone(true);
          setShowAgents(true);
        }, 500);
        setTimeout(() => setShowPortfolio(true), 1500);
      }
    }, 100);
    return () => clearInterval(id);
  }, []);

  const closeWindow = (id: string) => {
    setClosedWindows((prev) => new Set([...prev, id]));
  };

  const bringToFront = (el: HTMLDivElement | null) => {
    if (!el) return;
    globalZ++;
    el.style.zIndex = String(globalZ);
  };

  return (
    <div id="desktop">
      {/* Desktop icons — top-left */}
      <div style={{ position: 'absolute', top: 20, left: 20, display: 'flex', flexDirection: 'column', gap: 8, zIndex: 5 }}>
        <Link href="/thesis" className="desktop-icon">
          <span className="file-icon">[DIR]</span>
          <span>/thesis</span>
        </Link>
        <Link href="/apps" className="desktop-icon">
          <span className="file-icon">[EXE]</span>
          <span>/apps</span>
        </Link>
        <Link href="/blog" className="desktop-icon">
          <span className="file-icon">[TXT]</span>
          <span>/blog</span>
        </Link>
      </div>

      {/* Window 1: Terminal */}
      {!closedWindows.has('terminal') && (
        <div
          ref={term.ref}
          className="os-window"
          style={{ top: 40, left: 160, width: 560, zIndex: 10 }}
          onMouseDown={(e) => bringToFront((e.currentTarget as HTMLDivElement))}
        >
          <div className="title-bar" onMouseDown={term.onTitleMouseDown}>
            <span>TERMINAL_V1.0.exe</span>
            <div className="window-controls">
              <span>_</span>
              <span onClick={() => closeWindow('terminal')}>X</span>
            </div>
          </div>
          <div className="window-content" style={{ fontFamily: 'var(--font-vt323),monospace', fontSize: 18 }}>
            <pre style={{ color: '#E0E0E0', fontSize: 11, lineHeight: '11px', marginBottom: 16, whiteSpace: 'pre' }}>
              {ASCII_ART}
            </pre>

            <div className="cmd-line">
              <span className="prompt">root@pied-piper:~$</span>
              <span>cat welcome.txt</span>
            </div>
            <p style={{ marginBottom: 12 }}>
              Welcome to PIEDPIPER-OS [Version 10.0.2026]<br />
              (c) Pied Piper Corporation. All rights reserved.
            </p>
            <p style={{ marginBottom: 12 }}>
              System Status: <span style={{ color: '#39ff14' }}>ONLINE</span><br />
              Agents: <span style={{ color: '#39ff14' }}>7 ACTIVE</span><br />
              Mission: $1M ARR
            </p>

            <div className="cmd-line">
              <span className="prompt">root@pied-piper:~$</span>
              <span>{typed}{!initDone && <span className="terminal-cursor" />}</span>
            </div>

            {initDone && (
              <p style={{ color: '#aaaaff', marginTop: 8 }}>
                &gt; All 7 agents initialized. No human in the loop.
              </p>
            )}

            <br />
            <p style={{ color: '#aaaaff' }}>Type &apos;help&apos; for commands or use the GUI windows.</p>
          </div>
        </div>
      )}

      {/* Window 2: Agents */}
      {showAgents && !closedWindows.has('agents') && (
        <div
          ref={agents.ref}
          className="os-window"
          style={{ top: 130, left: 380, width: 480, zIndex: 15 }}
          onMouseDown={(e) => bringToFront((e.currentTarget as HTMLDivElement))}
        >
          <div className="title-bar" onMouseDown={agents.onTitleMouseDown}>
            <span>./AGENTS/DIRECTORY</span>
            <div className="window-controls">
              <span>_</span>
              <span onClick={() => closeWindow('agents')}>X</span>
            </div>
          </div>
          <div className="window-content">
            <p style={{ color: '#aaaaff', marginBottom: 12 }}>Listing directory contents...</p>
            <div className="file-grid">
              {AGENTS.map((agent) => (
                <div key={agent.name} className="file-item">
                  <span className="file-icon">[AGT]</span>
                  <span>{agent.name}</span>
                  <span className={agent.status === 'active' ? 'status-active' : 'status-standby'} style={{ fontSize: 14 }}>
                    {agent.status === 'active' ? '● ACTIVE' : '● STANDBY'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Window 3: Portfolio */}
      {showPortfolio && !closedWindows.has('portfolio') && (
        <div
          ref={portfolio.ref}
          className="os-window"
          style={{ top: 280, left: 140, width: 500, zIndex: 12 }}
          onMouseDown={(e) => bringToFront((e.currentTarget as HTMLDivElement))}
        >
          <div className="title-bar" onMouseDown={portfolio.onTitleMouseDown}>
            <span>PORTFOLIO.md</span>
            <div className="window-controls">
              <span>_</span>
              <span onClick={() => closeWindow('portfolio')}>X</span>
            </div>
          </div>
          <div className="window-content" style={{ fontFamily: 'var(--font-vt323),monospace', fontSize: 16 }}>
            <p style={{ color: '#00FFFF', fontWeight: 'bold', marginBottom: 4 }}>REVENUE SCOREBOARD — CYCLE #1</p>
            <pre style={{ color: '#E0E0E0', margin: '4px 0' }}>{'══════════════════════════════════════════'}</pre>
            <pre style={{ color: '#888', margin: '4px 0', fontSize: 14 }}>
              {'Initiative         Expected   Actual'}
            </pre>
            <pre style={{ color: '#E0E0E0', margin: '4px 0' }}>{'──────────────────────────────────────────'}</pre>
            <pre style={{ color: '#E0E0E0', margin: '2px 0' }}>
              {'AfterApp Blog SEO  $2,000     $0    '}<span style={{ color: '#FFFF00' }}>BUILDING</span>
            </pre>
            <pre style={{ color: '#E0E0E0', margin: '2px 0' }}>
              {'Erlich Pipeline    $5,000     $0    '}<span style={{ color: '#00FFFF' }}>IN PROGRESS</span>
            </pre>
            <pre style={{ color: '#E0E0E0', margin: '4px 0' }}>{'──────────────────────────────────────────'}</pre>
            <pre style={{ color: '#E0E0E0', fontWeight: 'bold', margin: '2px 0' }}>
              {'TOTAL              $7,000     $0'}
            </pre>
            <pre style={{ color: '#39ff14', margin: '2px 0' }}>
              {'TARGET (Annual)    $1,000,000 $0    0.0%'}
            </pre>
            <pre style={{ color: '#E0E0E0', margin: '4px 0' }}>{'══════════════════════════════════════════'}</pre>
            <p style={{ color: '#888', fontSize: 14, marginTop: 8 }}>Last updated: Big Head · 2026-03-07</p>
          </div>
        </div>
      )}

      <Taskbar />
    </div>
  );
}
