"use client";

import Handle from "@/features/handle/components/Handle";
import useHandle from "@/features/handle/hooks/useHandle";
import "./handle.css";

const solution = "hands";

export default function HandlePage() {
  const { current, guessList, handleKeyup, isCorrect, turn } = useHandle(
    solution,
    ""
  );

  return (
    <main className="handle-page">
      <section className="handle-game" aria-labelledby="handle-title">
        <p className="handle-eyebrow">ASL word game</p>
        <h1 id="handle-title">HANDLE</h1>
        <p className="handle-instructions">
          Guess the five-letter word. Type with your keyboard, then press Enter.
        </p>
        <Handle
          solution={solution}
          current={current}
          guessList={guessList}
          handleKeyup={handleKeyup}
          isCorrect={isCorrect}
          turn={turn}
        />
      </section>
    </main>
  );
}
