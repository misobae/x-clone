import { QueryFunction } from "@tanstack/query-core";
import { Post } from "@/model/post";

const getUserPosts: QueryFunction<Post[], [_1: string, _2: string, string], number | undefined>
  = async ({ queryKey, pageParam }) => {
  const [_1, _2, username] = queryKey;
  const res = await fetch(`http://localhost:9090/api/users/${username}/posts?cursor=${pageParam ?? ''}`, {
    next: {
      tags: ['posts', 'users', username],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const posts = await res.json();
  // 서버에서 반환된 데이터가 배열인지 확인
  if (!Array.isArray(posts)) {
    throw new Error('Invalid data format');
  }
  
  return posts;
}

export default getUserPosts;