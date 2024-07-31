import { useState } from "react";
import { useJoke } from "../hooks/useJoke";

export default function JokeGenerator() {
  const [showPunchline, setShowPunchline] = useState(false);
  const { data: joke, isLoading, isError, refetch } = useJoke();

  const handleNewJoke = () => {
    setShowPunchline(false);
    refetch();
  };

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error fetching joke</div>;

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
