import { useEffect, useMemo, useState } from "react";

type Mark = "correct" | "present" | "absent";

type Memory = {
  caption: string;
  scene: "cafe" | "trip" | "tea";
  src?: string;
  fit?: "cover" | "contain";
  pos?: "center" | "top";
};

type Level = {
  word: string;
  kicker: string;
  clue: string;
  found: string;
  memories: Memory[];
};

const LEVELS: Level[] = [
  {
    word: "CAFES",
    kicker: "Clue one",
    clue: "Corner tables, late orders, the places you always return to.",
    found: "The cafés knew your order before you did.",
    memories: [
      { caption: "the tea was brewinggg", scene: "cafe", src: "/memories/cafe-1.jpg" },
      { caption: "Starbucks @Coimbatoree", scene: "cafe", src: "/memories/cafe-2.jpg" },
      { caption: "Boba and Matcha loveee", scene: "cafe", src: "/memories/cafe-3.jpg" },
      { caption: "That Cloud 9 wafflee", scene: "cafe", src: "/memories/cafe-4.jpg" },
      { caption: "Palaaram Brownieee", scene: "cafe", src: "/memories/cafe-5.jpeg" },
    ],
  },
  {
    word: "TRIPS",
    kicker: "Clue two",
    clue: "Windows, tickets, somewhere new on the horizon.",
    found: "Every trip still smells a little like the first day.",
    memories: [
      { caption: "placement or trip??", scene: "trip", src: "/memories/trip-1.jpg" },
      { caption: "fort kochiii", scene: "trip", src: "/memories/trip-2.jpg" },
      { caption: "Bells, lights, and a mirror selfie", scene: "trip", src: "/memories/trip-3.jpg" },
      { caption: "Chennaiiiii", scene: "trip", src: "/memories/trip-4.jpg", fit: "contain" },
      { caption: "oh kochi!!", scene: "trip", src: "/memories/trip-5.jpg", pos: "top" },
      { caption: "IIIIIIIII IVVVVVVVVVV", scene: "trip", src: "/memories/trip-6.jpg" },
    ],
  },
  {
    word: "CHATS",
    kicker: "Clue three",
    clue: "Steam, stories, the long talks that never stay short.",
    found: "Tea was just the excuse. The gossip was the point.",
    memories: [
      { caption: "One pot, too many secrets", scene: "tea-1.jpg" },
      { caption: "The conversation that ran long", scene: "tea-2.jpg" },
      { caption: "Stories that needed a refill", scene: "tea-3.jpg" },
      { caption: "The part you only told once", scene: "tea-4.jpg" },
      { caption: "One pot, too many secrets", scene: "tea-5.jpg" },
      { caption: "The conversation that ran long", scene: "tea-6.jpg" },
      { caption: "Stories that needed a refill", scene: "tea-7.jpg" },
      { caption: "The part you only told once", scene: "tea-8.jpg" },
      { caption: "The part you only told once", scene: "tea-9.jpg" },
    ],
  },
];

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
const SAVE_KEY = "niranjana-hunt-v1";

function score(guess: string, answer: string): Mark[] {
  const marks: Mark[] = Array(answer.length).fill("absent");
  const left: Record<string, number> = {};
  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) marks[i] = "correct";
    else left[answer[i]] = (left[answer[i]] ?? 0) + 1;
  }
  for (let i = 0; i < answer.length; i++) {
    if (marks[i] === "correct") continue;
    if ((left[guess[i]] ?? 0) > 0) {
      marks[i] = "present";
      left[guess[i]] -= 1;
    }
  }
  return marks;
}

function tileClass(mark?: Mark) {
  if (mark === "correct") return "bg-[#c5d9b0] border-[#9bb887] text-[#2f4030]";
  if (mark === "present") return "bg-[#f4c2cf] border-[#e59aaf] text-[#5a3140]";
  if (mark === "absent") return "bg-[#d5e4f0] border-[#b7cddd] text-[#4a6070]";
  return "bg-white/80 border-[#eadde3] text-[#4a3b44]";
}

function Scene({ kind }: { kind: Memory["scene"] }) {
  if (kind === "cafe") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden>
        <rect width="160" height="110" fill="#fde8ee" />
        <circle cx="120" cy="28" r="16" fill="#fff6c8" />
        <rect x="18" y="72" width="124" height="8" rx="3" fill="#e7c3b0" />
        <path d="M48 72 V46 h36 v26" fill="none" stroke="#c97878" strokeWidth="4" />
        <path d="M84 54 h10 a8 8 0 0 1 0 16 h-10" fill="none" stroke="#c97878" strokeWidth="4" />
        <ellipse cx="66" cy="46" rx="10" ry="4" fill="#f3d2a2" />
        <path d="M58 42 q8 -12 16 0" fill="none" stroke="#f7f3ee" strokeWidth="2" />
      </svg>
    );
  }
  if (kind === "trip") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden>
        <rect width="160" height="110" fill="#e4f0f8" />
        <path d="M0 78 Q40 60 80 74 T160 68 V110 H0Z" fill="#cfe3c4" />
        <circle cx="122" cy="30" r="14" fill="#fff4c2" />
        <rect x="36" y="58" width="48" height="28" rx="4" fill="#f4c9b0" />
        <rect x="42" y="50" width="18" height="10" rx="2" fill="#8eb4d4" />
        <circle cx="48" cy="88" r="6" fill="#5c4a55" />
        <circle cx="72" cy="88" r="6" fill="#5c4a55" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden>
      <rect width="160" height="110" fill="#eef6e4" />
      <ellipse cx="80" cy="78" rx="34" ry="8" fill="#d7e6c6" />
      <path d="M58 76 V52 h44 v24" fill="#fffaf4" stroke="#d9b48a" strokeWidth="3" />
      <path d="M62 52 h36 v8 H62z" fill="#c97878" />
      <path d="M70 40 q10 -14 20 0" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="28" cy="30" r="3" fill="#f4b6c2" />
      <circle cx="132" cy="24" r="4" fill="#f4b6c2" />
    </svg>
  );
}

export function Hunt() {
  const [chapter, setChapter] = useState(0);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [shake, setShake] = useState(false);
  const [note, setNote] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { chapter?: number };
        if (typeof saved.chapter === "number") setChapter(Math.min(saved.chapter, 4));
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(SAVE_KEY, JSON.stringify({ chapter }));
  }, [chapter, ready]);

  const level = chapter >= 1 && chapter <= 3 ? LEVELS[chapter - 1] : null;
  const won = level ? guesses.includes(level.word) : false;

  const keyMarks = useMemo(() => {
    const map: Record<string, Mark> = {};
    if (!level) return map;
    const rank: Record<Mark, number> = { absent: 1, present: 2, correct: 3 };
    for (const g of guesses) {
      score(g, level.word).forEach((mark, i) => {
        const letter = g[i];
        if (!map[letter] || rank[mark] > rank[map[letter]]) map[letter] = mark;
      });
    }
    return map;
  }, [guesses, level]);

  function resetBoard() {
    setGuesses([]);
    setCurrent("");
    setNote("");
  }

  function go(next: number) {
    resetBoard();
    setChapter(next);
  }

  function submit() {
    if (!level || won) return;
    if (current.length !== 5) {
      setNote("Five letters, like a little secret.");
      setShake(true);
      window.setTimeout(() => setShake(false), 360);
      return;
    }
    const next = [...guesses, current];
    setGuesses(next);
    setCurrent("");
    if (current === level.word) {
      setNote(level.found);
      return;
    }
    if (next.length >= 6) {
      setNote("Not quite — try the clue again.");
      window.setTimeout(() => {
        setGuesses([]);
        setNote("");
      }, 900);
      return;
    }
    setNote("");
  }

  function typeLetter(letter: string) {
    if (!level || won) return;
    if (current.length >= 5) return;
    setCurrent((c) => c + letter);
    setNote("");
  }

  function backspace() {
    setCurrent((c) => c.slice(0, -1));
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!level || won) return;
      if (e.key === "Enter") submit();
      else if (e.key === "Backspace") backspace();
      else if (/^[a-zA-Z]$/.test(e.key)) typeLetter(e.key.toUpperCase());
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const rows = Array.from({ length: 6 }, (_, r) => {
    const guess = guesses[r] ?? (r === guesses.length ? current : "");
    const marks = guesses[r] && level ? score(guesses[r], level.word) : [];
    return { guess, marks, live: r === guesses.length };
  });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-lg flex-col px-5 py-8 sm:py-12">
      <header className="mb-6 text-center">
        <p className="font-[Fraunces] text-lg tracking-tight text-[#6b4454]">A little something for you.</p>
      </header>

      {chapter === 0 && (
        <section className="stage flex flex-1 flex-col justify-center gap-6">
          <div className="floaty mx-auto grid h-28 w-28 place-items-center rounded-full bg-[#f8d7e0] shadow-[0_12px_40px_rgba(232,160,180,0.45)]">
            <svg viewBox="0 0 80 80" className="h-16 w-16" aria-hidden>
              <ellipse cx="40" cy="58" rx="22" ry="6" fill="#e8b4c4" />
              <path d="M22 40 h36 v16 a6 6 0 0 1-6 6 H28 a6 6 0 0 1-6-6z" fill="#f7d6e0" />
              <path d="M22 40 h36 v6 H22z" fill="#c97890" />
              <rect x="30" y="28" width="20" height="12" rx="3" fill="#fff6ee" />
              <path d="M40 18 v10" stroke="#e07a8a" strokeWidth="2" />
              <circle cx="40" cy="16" r="3" fill="#ffe08a" />
              <circle cx="28" cy="50" r="1.6" fill="#fff" />
              <circle cx="40" cy="52" r="1.6" fill="#fff" />
              <circle cx="52" cy="50" r="1.6" fill="#fff" />
            </svg>
          </div>
          <div className="space-y-3 text-center">
            <h1 className="font-[Fraunces] text-4xl leading-tight text-[#5a3946] sm:text-5xl">
              Happy birthday, Niriiiii
            </h1>
            <p className="text-base leading-relaxed text-[#6d5962]">
              Three clues hide in the ordinary things you love. Solve each word to unlock a pocket of
              memory — something to reminisce over.
            </p>
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="mx-auto rounded-full bg-[#5a3946] px-8 py-3 text-sm font-bold tracking-wide text-white shadow-lg"
          >
            Begin the hunt
          </button>
        </section>
      )}

      {level && (
        <section className="stage flex flex-1 flex-col gap-5">
          <div className="rounded-3xl bg-white/70 p-5 shadow-[0_10px_40px_rgba(180,140,160,0.12)] ring-1 ring-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c07a90]">{level.kicker}</p>
            <h2 className="mt-1 font-[Fraunces] text-2xl text-[#5a3946]">{level.clue}</h2>
            <p className="mt-2 text-sm text-[#8a7380]">Five letters. Six tries.</p>
          </div>

          <div className={`grid gap-1.5 ${shake ? "shake" : ""}`} aria-label="word grid">
            {rows.map((row, r) => (
              <div key={r} className="grid grid-cols-5 gap-1.5">
                {Array.from({ length: 5 }, (_, c) => {
                  const ch = row.guess[c] ?? "";
                  const mark = row.marks[c];
                  return (
                    <div
                      key={c}
                      className={`grid aspect-square place-items-center rounded-xl border-2 text-xl font-bold ${tileClass(mark)}`}
                    >
                      {ch}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {note && <p className="text-center text-sm text-[#6d5962]">{note}</p>}

          {won ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {level.memories.map((m) => (
                  <figure
                    key={m.caption}
                    className="overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-[#f3e4ea]"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#f8efe8]">
                      {m.src ? (
                        <img
                          src={m.src}
                          alt={m.caption}
                          className={`h-full w-full ${m.fit === "contain" ? "object-contain" : "object-cover"} ${m.pos === "top" ? "object-top" : "object-center"}`}
                        />
                      ) : (
                        <Scene kind={m.scene} />
                      )}
                    </div>
                    <figcaption className="px-1 pt-2 pb-1 text-center text-xs text-[#6d5962]">
                      {m.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
              {level.memories.some((m) => !m.src) && (
                <p className="text-center text-xs text-[#a08a94]">A little drawing until the real photos arrive.</p>
              )}
              <button
                type="button"
                onClick={() => go(chapter + 1)}
                className="w-full rounded-full bg-[#5a3946] py-3 text-sm font-bold text-white"
              >
                {chapter === 3 ? "Lessgoooooo" : "Follow the next clue"}
              </button>
            </div>
          ) : (
            <div className="mt-auto space-y-2">
              {ROWS.map((row) => (
                <div key={row} className="flex justify-center gap-1">
                  {row.split("").map((letter) => (
                    <button
                      key={letter}
                      type="button"
                      onClick={() => typeLetter(letter)}
                      className={`h-11 min-w-7 flex-1 rounded-lg text-xs font-bold sm:h-12 sm:text-sm ${tileClass(keyMarks[letter])}`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              ))}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={backspace}
                  className="h-11 flex-1 rounded-lg bg-white text-sm font-bold ring-1 ring-[#eadde3]"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={submit}
                  className="h-11 flex-[2] rounded-lg bg-[#b7c9a8] text-sm font-bold text-[#2f4030]"
                >
                  Guess
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {chapter === 4 && (
        <section className="stage flex flex-1 flex-col items-center justify-center gap-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c07a90]">All three found</p>
          <h2 className="font-[Fraunces] text-4xl leading-tight text-[#5a3946] sm:text-5xl">
            The map was you, Niriiiii
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-[#6d5962]">
            Cafés for the quiet hours, trips for the wide ones, and chats that turned tea into a whole
            afternoon. Another year of all three — happy birthday.
          </p>
          <button
            type="button"
            onClick={() => go(0)}
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5a3946] ring-1 ring-[#eadde3]"
          >
            Walk it again
          </button>
        </section>
      )}
    </main>
  );
}
