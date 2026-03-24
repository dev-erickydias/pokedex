"use client";

interface HeaderProps {
  query: string;
  onSearch: (q: string) => void;
}

export default function Header({ query, onSearch }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-deep to-deep/92 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 pt-5 pb-4">
        {/* Logo row */}
        <div className="flex items-center gap-3 mb-1">
          <div className="w-3.5 h-3.5 rounded-full bg-red shadow-[0_0_12px_var(--color-red)] shrink-0" />
          <h1 className="font-[family-name:var(--font-display)] font-bold text-[1.5rem] tracking-[6px] flex-grow">
            POKEDEX
          </h1>
          <div className="flex items-center gap-1.5 font-[family-name:var(--font-display)] text-[0.6rem] tracking-[3px] uppercase text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
            ONLINE
          </div>
        </div>

        <p className="text-[0.65rem] tracking-[2px] uppercase pl-[26px] mb-3" style={{ color: "rgba(232,234,237,0.4)" }}>
          National Pokemon Encyclopedia &mdash; Kanto Research Lab
        </p>

        {/* Search */}
        <div className="relative max-w-[480px]">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] pointer-events-none"
            style={{ color: "rgba(232,234,237,0.4)" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by name or number..."
            autoComplete="off"
            className="w-full py-2.5 pl-11 pr-4 border border-border rounded-lg font-[family-name:var(--font-body)] text-[0.9rem] font-light outline-none bg-white/[0.03] text-[#e8eaed] placeholder:text-dim transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,229,255,0.15)] focus:bg-[rgba(0,229,255,0.02)]"
          />
        </div>
      </div>
    </header>
  );
}
