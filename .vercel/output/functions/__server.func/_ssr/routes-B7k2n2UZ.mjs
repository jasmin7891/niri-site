import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B7k2n2UZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LEVELS = [
	{
		word: "CAFES",
		kicker: "Clue one",
		clue: "Corner tables, late orders, the places you always return to.",
		found: "The cafés knew your order before you did.",
		memories: [{
			caption: "A slow afternoon, one more cup",
			scene: "cafe"
		}, {
			caption: "The table by the window",
			scene: "cafe"
		}]
	},
	{
		word: "TRIPS",
		kicker: "Clue two",
		clue: "Windows, tickets, somewhere new on the horizon.",
		found: "Every trip still smells a little like the first day.",
		memories: [{
			caption: "Bags packed, nowhere to be",
			scene: "trip"
		}, {
			caption: "A view you still talk about",
			scene: "trip"
		}]
	},
	{
		word: "CHATS",
		kicker: "Clue three",
		clue: "Steam, stories, the long talks that never stay short.",
		found: "Tea was just the excuse. The gossip was the point.",
		memories: [{
			caption: "One pot, too many secrets",
			scene: "tea"
		}, {
			caption: "The conversation that ran long",
			scene: "tea"
		}]
	}
];
var ROWS = [
	"QWERTYUIOP",
	"ASDFGHJKL",
	"ZXCVBNM"
];
var SAVE_KEY = "niranjana-hunt-v1";
function score(guess, answer) {
	const marks = Array(answer.length).fill("absent");
	const left = {};
	for (let i = 0; i < answer.length; i++) if (guess[i] === answer[i]) marks[i] = "correct";
	else left[answer[i]] = (left[answer[i]] ?? 0) + 1;
	for (let i = 0; i < answer.length; i++) {
		if (marks[i] === "correct") continue;
		if ((left[guess[i]] ?? 0) > 0) {
			marks[i] = "present";
			left[guess[i]] -= 1;
		}
	}
	return marks;
}
function tileClass(mark) {
	if (mark === "correct") return "bg-[#c5d9b0] border-[#9bb887] text-[#2f4030]";
	if (mark === "present") return "bg-[#f4c2cf] border-[#e59aaf] text-[#5a3140]";
	if (mark === "absent") return "bg-[#d5e4f0] border-[#b7cddd] text-[#4a6070]";
	return "bg-white/80 border-[#eadde3] text-[#4a3b44]";
}
function Scene({ kind }) {
	if (kind === "cafe") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 110",
		className: "h-full w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "160",
				height: "110",
				fill: "#fde8ee"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "28",
				r: "16",
				fill: "#fff6c8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "18",
				y: "72",
				width: "124",
				height: "8",
				rx: "3",
				fill: "#e7c3b0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 72 V46 h36 v26",
				fill: "none",
				stroke: "#c97878",
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M84 54 h10 a8 8 0 0 1 0 16 h-10",
				fill: "none",
				stroke: "#c97878",
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "66",
				cy: "46",
				rx: "10",
				ry: "4",
				fill: "#f3d2a2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 42 q8 -12 16 0",
				fill: "none",
				stroke: "#f7f3ee",
				strokeWidth: "2"
			})
		]
	});
	if (kind === "trip") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 110",
		className: "h-full w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "160",
				height: "110",
				fill: "#e4f0f8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 78 Q40 60 80 74 T160 68 V110 H0Z",
				fill: "#cfe3c4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "122",
				cy: "30",
				r: "14",
				fill: "#fff4c2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "36",
				y: "58",
				width: "48",
				height: "28",
				rx: "4",
				fill: "#f4c9b0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "42",
				y: "50",
				width: "18",
				height: "10",
				rx: "2",
				fill: "#8eb4d4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "48",
				cy: "88",
				r: "6",
				fill: "#5c4a55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "72",
				cy: "88",
				r: "6",
				fill: "#5c4a55"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 110",
		className: "h-full w-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "160",
				height: "110",
				fill: "#eef6e4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "80",
				cy: "78",
				rx: "34",
				ry: "8",
				fill: "#d7e6c6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 76 V52 h44 v24",
				fill: "#fffaf4",
				stroke: "#d9b48a",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 52 h36 v8 H62z",
				fill: "#c97878"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 40 q10 -14 20 0",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "28",
				cy: "30",
				r: "3",
				fill: "#f4b6c2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "132",
				cy: "24",
				r: "4",
				fill: "#f4b6c2"
			})
		]
	});
}
function Hunt() {
	const [chapter, setChapter] = (0, import_react.useState)(0);
	const [guesses, setGuesses] = (0, import_react.useState)([]);
	const [current, setCurrent] = (0, import_react.useState)("");
	const [shake, setShake] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(SAVE_KEY);
			if (raw) {
				const saved = JSON.parse(raw);
				if (typeof saved.chapter === "number") setChapter(Math.min(saved.chapter, 4));
			}
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(SAVE_KEY, JSON.stringify({ chapter }));
	}, [chapter, ready]);
	const level = chapter >= 1 && chapter <= 3 ? LEVELS[chapter - 1] : null;
	const won = level ? guesses.includes(level.word) : false;
	const keyMarks = (0, import_react.useMemo)(() => {
		const map = {};
		if (!level) return map;
		const rank = {
			absent: 1,
			present: 2,
			correct: 3
		};
		for (const g of guesses) score(g, level.word).forEach((mark, i) => {
			const letter = g[i];
			if (!map[letter] || rank[mark] > rank[map[letter]]) map[letter] = mark;
		});
		return map;
	}, [guesses, level]);
	function resetBoard() {
		setGuesses([]);
		setCurrent("");
		setNote("");
	}
	function go(next) {
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
	function typeLetter(letter) {
		if (!level || won) return;
		if (current.length >= 5) return;
		setCurrent((c) => c + letter);
		setNote("");
	}
	function backspace() {
		setCurrent((c) => c.slice(0, -1));
	}
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (!level || won) return;
			if (e.key === "Enter") submit();
			else if (e.key === "Backspace") backspace();
			else if (/^[a-zA-Z]$/.test(e.key)) typeLetter(e.key.toUpperCase());
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	const rows = Array.from({ length: 6 }, (_, r) => {
		return {
			guess: guesses[r] ?? (r === guesses.length ? current : ""),
			marks: guesses[r] && level ? score(guesses[r], level.word) : [],
			live: r === guesses.length
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-screen w-full max-w-lg flex-col px-5 py-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "mb-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-[Fraunces] text-lg tracking-tight text-[#6b4454]",
					children: "A little something for you."
				})
			}),
			chapter === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stage flex flex-1 flex-col justify-center gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "floaty mx-auto grid h-28 w-28 place-items-center rounded-full bg-[#f8d7e0] shadow-[0_12px_40px_rgba(232,160,180,0.45)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 80 80",
							className: "h-16 w-16",
							"aria-hidden": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: "40",
									cy: "58",
									rx: "22",
									ry: "6",
									fill: "#e8b4c4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M22 40 h36 v16 a6 6 0 0 1-6 6 H28 a6 6 0 0 1-6-6z",
									fill: "#f7d6e0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M22 40 h36 v6 H22z",
									fill: "#c97890"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "30",
									y: "28",
									width: "20",
									height: "12",
									rx: "3",
									fill: "#fff6ee"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M40 18 v10",
									stroke: "#e07a8a",
									strokeWidth: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "40",
									cy: "16",
									r: "3",
									fill: "#ffe08a"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "28",
									cy: "50",
									r: "1.6",
									fill: "#fff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "40",
									cy: "52",
									r: "1.6",
									fill: "#fff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "52",
									cy: "50",
									r: "1.6",
									fill: "#fff"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-[Fraunces] text-4xl leading-tight text-[#5a3946] sm:text-5xl",
							children: "Happy birthday, Niriiiii"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-[#6d5962]",
							children: "Three clues hide in the ordinary things you love. Solve each word to unlock a pocket of memory — something to reminisce over."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(1),
						className: "mx-auto rounded-full bg-[#5a3946] px-8 py-3 text-sm font-bold tracking-wide text-white shadow-lg",
						children: "Begin the hunt"
					})
				]
			}),
			level && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stage flex flex-1 flex-col gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-white/70 p-5 shadow-[0_10px_40px_rgba(180,140,160,0.12)] ring-1 ring-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-[#c07a90]",
								children: level.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-[Fraunces] text-2xl text-[#5a3946]",
								children: level.clue
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-[#8a7380]",
								children: "Five letters. Six tries."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid gap-1.5 ${shake ? "shake" : ""}`,
						"aria-label": "word grid",
						children: rows.map((row, r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-5 gap-1.5",
							children: Array.from({ length: 5 }, (_, c) => {
								const ch = row.guess[c] ?? "";
								const mark = row.marks[c];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid aspect-square place-items-center rounded-xl border-2 text-xl font-bold ${tileClass(mark)}`,
									children: ch
								}, c);
							})
						}, r))
					}),
					note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-[#6d5962]",
						children: note
					}),
					won ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-3",
								children: level.memories.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-[#f3e4ea]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/3] overflow-hidden rounded-xl",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { kind: m.scene })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
										className: "px-1 pt-2 pb-1 text-center text-xs text-[#6d5962]",
										children: m.caption
									})]
								}, m.caption))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs text-[#a08a94]",
								children: "A little drawing until the real photos arrive."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go(chapter + 1),
								className: "w-full rounded-full bg-[#5a3946] py-3 text-sm font-bold text-white",
								children: chapter === 3 ? "Open the last page" : "Follow the next clue"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto space-y-2",
						children: [ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center gap-1",
							children: row.split("").map((letter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => typeLetter(letter),
								className: `h-11 min-w-7 flex-1 rounded-lg text-xs font-bold sm:h-12 sm:text-sm ${tileClass(keyMarks[letter])}`,
								children: letter
							}, letter))
						}, row)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: backspace,
								className: "h-11 flex-1 rounded-lg bg-white text-sm font-bold ring-1 ring-[#eadde3]",
								children: "Delete"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: submit,
								className: "h-11 flex-[2] rounded-lg bg-[#b7c9a8] text-sm font-bold text-[#2f4030]",
								children: "Guess"
							})]
						})]
					})
				]
			}),
			chapter === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "stage flex flex-1 flex-col items-center justify-center gap-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.22em] text-[#c07a90]",
						children: "All three found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-[Fraunces] text-4xl leading-tight text-[#5a3946] sm:text-5xl",
						children: "The map was you, Niriiiii"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-base leading-relaxed text-[#6d5962]",
						children: "Cafés for the quiet hours, trips for the wide ones, and chats that turned tea into a whole afternoon. Another year of all three — happy birthday."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(0),
						className: "rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5a3946] ring-1 ring-[#eadde3]",
						children: "Walk it again"
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hunt, {});
}
//#endregion
export { Home as component };
