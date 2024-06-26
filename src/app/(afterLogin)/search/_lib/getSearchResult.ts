import { QueryFunction } from "@tanstack/query-core";
import { Post } from "@/model/post";

export const getSearchResult: QueryFunction<Post[], [_1: string, _2: string, searchParams: { q: string, pf?: string, f?: string }], number | undefined>
  = async ({ queryKey, pageParam }) => {
  const [_1, _2, searchParams] = queryKey; // queryKey: ["posts", "search", searchParams],
  const res = await fetch(`http://localhost:9090/api/search/${searchParams.q}?${searchParams.toString()}?cursor=${pageParam ?? ''}`, {
    next: {
      tags: ['posts', 'search', searchParams.q],
    },
    cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}