"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonCard";
import { Pokemon, fetchBatch } from "@/lib/pokemon";

const LIMIT = 20;

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function loadMore() {
    if (loading) return;
    setLoading(true);
    const batch = await fetchBatch(offset, LIMIT);
    setPokemon((prev) => [...prev, ...batch]);
    setOffset((prev) => prev + LIMIT);
    setLoading(false);
  }

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return pokemon;
    const q = query.toLowerCase().trim();
    return pokemon.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        String(p.id).padStart(3, "0").includes(q)
    );
  }, [pokemon, query]);

  return (
    <>
      <Header query={query} onSearch={setQuery} />

      <main className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          {filtered.map((p, i) => (
            <PokemonCard key={p.id} pokemon={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && pokemon.length > 0 && (
          <div className="text-center py-20">
            <p className="font-[family-name:var(--font-display)] text-dim text-sm tracking-[2px] uppercase">
              No Pokemon found
            </p>
          </div>
        )}
      </main>

      <div className="flex justify-center pb-16 pt-2">
        <button
          onClick={loadMore}
          disabled={loading}
          className="group relative flex items-center gap-2 px-8 py-2.5 font-[family-name:var(--font-display)] text-[0.75rem] font-semibold tracking-[3px] uppercase border border-accent/25 rounded-md bg-transparent text-accent cursor-pointer overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_24px_rgba(0,229,255,0.15)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
        >
          {/* Hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-dim to-transparent opacity-0 group-hover:opacity-100 group-disabled:group-hover:opacity-0 transition-opacity duration-300" />
          <span className="relative z-10">
            {loading ? "Loading..." : "Load More"}
          </span>
          {loading && (
            <span className="relative z-10 w-3.5 h-3.5 border-2 border-accent-dim border-t-accent rounded-full animate-spin-fast" />
          )}
        </button>
      </div>
    </>
  );
}
