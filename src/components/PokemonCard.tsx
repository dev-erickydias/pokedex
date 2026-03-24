"use client";

import { useState } from "react";
import Image from "next/image";
import { Pokemon, TYPE_COLORS, STAT_LABELS, getStatColor } from "@/lib/pokemon";

export default function PokemonCard({
  pokemon,
  index,
}: {
  pokemon: Pokemon;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const primaryType = pokemon.types[0]?.type.name || "normal";
  const typeColor = TYPE_COLORS[primaryType] || TYPE_COLORS.normal;

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="card-reveal group relative bg-card border border-border rounded-xl p-5 pb-4 cursor-pointer overflow-hidden
                 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]
                 hover:-translate-y-1.5 hover:border-accent-dim hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_rgba(0,229,255,0.08)]"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Holographic sheen */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 30%, rgba(0,229,255,0.04) 45%, rgba(255,61,90,0.04) 55%, transparent 70%)",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Number */}
      <div className="flex justify-between items-start mb-1">
        <span
          className="font-[family-name:var(--font-display)] text-[0.75rem] font-semibold tracking-wider"
          style={{ color: "rgba(232,234,237,0.35)" }}
        >
          #{String(pokemon.id).padStart(3, "0")}
        </span>
      </div>

      {/* Image */}
      <div className="relative flex justify-center items-center h-[130px] my-1">
        {/* Glow */}
        <div
          className="absolute w-[90px] h-[90px] rounded-full blur-[20px] opacity-40 group-hover:opacity-70 transition-opacity duration-400"
          style={{
            background: `radial-gradient(circle, ${typeColor.glow} 0%, transparent 70%)`,
          }}
        />
        <Image
          src={
            pokemon.sprites.other["official-artwork"].front_default ||
            pokemon.sprites.front_default
          }
          alt={pokemon.name}
          width={120}
          height={120}
          className="relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12] group-hover:-translate-y-1"
        />
      </div>

      {/* Name */}
      <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold capitalize text-center mt-1 tracking-wide">
        {pokemon.name}
      </h3>

      {/* Types */}
      <div className="flex justify-center gap-1.5 mt-2 flex-wrap">
        {pokemon.types.map((t) => {
          const tc = TYPE_COLORS[t.type.name] || TYPE_COLORS.normal;
          return (
            <span
              key={t.type.name}
              className="px-2.5 py-[3px] rounded font-[family-name:var(--font-display)] text-[0.6rem] font-semibold uppercase tracking-[1.5px] border transition-shadow duration-300 group-hover:shadow-[0_0_8px_var(--glow)]"
              style={
                {
                  background: tc.bg,
                  color: tc.text,
                  borderColor: tc.bg.replace("0.15", "0.3"),
                  "--glow": tc.glow,
                } as React.CSSProperties
              }
            >
              {t.type.name}
            </span>
          );
        })}
      </div>

      {/* Stats */}
      <div
        className={`grid grid-cols-2 gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-border overflow-hidden transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          expanded
            ? "max-h-[200px] opacity-100"
            : "max-h-0 opacity-0 mt-0 pt-0 border-transparent"
        }`}
      >
        {pokemon.stats.map((s) => {
          const pct = Math.min((s.base_stat / 160) * 100, 100);
          const color = getStatColor(s.base_stat);
          return (
            <div key={s.stat.name} className="flex flex-col gap-[3px]">
              <div className="flex justify-between items-baseline">
                <span
                  className="font-[family-name:var(--font-display)] text-[0.58rem] font-semibold tracking-[1.5px] uppercase"
                  style={{ color: "rgba(232,234,237,0.4)" }}
                >
                  {STAT_LABELS[s.stat.name] || s.stat.name}
                </span>
                <span
                  className="font-[family-name:var(--font-display)] text-[0.7rem] font-bold"
                  style={{ color: "rgba(232,234,237,0.65)" }}
                >
                  {s.base_stat}
                </span>
              </div>
              <div className="h-[3px] bg-white/[0.06] rounded-sm overflow-hidden">
                <div
                  className={`h-full rounded-sm ${expanded ? "stat-fill-animate" : ""}`}
                  style={{ width: `${pct}%`, background: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
