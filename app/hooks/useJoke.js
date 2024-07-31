import { useQuery } from "@tanstack/react-query";

export function useJoke() {
  return useQuery({
    queryKey: ["joke"],
    queryFn: async () => {
      const response = await fetch("/api/joke");
      return response.json();
    },
  });
}
