"use client";

import { useQuery } from "@tanstack/react-query";

export function useJoke(trigger) {
  return useQuery({
    queryKey: ["joke", trigger],
    queryFn: async () => {
      const response = await fetch("/api/joke?t=" + Date.now());
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: 0,
  });
}
