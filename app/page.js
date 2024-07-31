"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import JokeGenerator from "./components/JokeGenerator";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>Joke Generator</h1>
        <JokeGenerator />
      </div>
    </QueryClientProvider>
  );
}
