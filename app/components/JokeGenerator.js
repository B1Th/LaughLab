"use client";

import { useState, useEffect } from "react";

export default function JokeGenerator() {
  const [joke, setJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch("/api/joke");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleNewJoke = () => {
    setShowPunchline(false);
    fetchJoke();
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error fetching joke</div>;

  return (
    <div className="joke-container">
      <p className="setup">{joke?.setup}</p>
      {showPunchline ? (
        <p className="punchline">{joke?.punchline}</p>
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
