import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 3,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchOnMount: true
    }
  }
})