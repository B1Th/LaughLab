"use client";

import JokeGenerator from "./components/JokeGenerator";

export default function Home() {
  return (
    <div className="container">
      <h1>Joke Generator</h1>
      <JokeGenerator />
    </div>
  );
}
