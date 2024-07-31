"use client";

import { useState } from "react";
import { useJoke } from "../hooks/useJoke";

export default function JokeGenerator() {
  const [showPunchline, setShowPunchline] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const { data: joke, isLoading, isError } = useJoke(trigger);

  const handleNewJoke = () => {
    console.log("Fetching new joke");
    setShowPunchline(false);
    setTrigger((prev) => prev + 1);
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error fetching joke</div>;
  if (!joke) return <div>No joke available</div>;

  return (
    <div className="joke-container">
      <p className="setup">{joke.setup}</p>
      {showPunchline ? (
        <p className="punchline">{joke.punchline}</p>
      ) : (
        <button className="reveal-btn" onClick={() => setShowPunchline(true)}>
          Reveal Punchline
        </button>
      )}
      <button className="new-joke-btn" onClick={handleNewJoke}>
        New Joke
      </button>
    </div>
  );
}
