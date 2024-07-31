import { useQuery } from "@tanstack/react-query";

export function useJoke() {
  return useQuery({
    queryKey: ["joke"],
    queryFn: async () => {
      const response = await fetch("/api/joke");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}
