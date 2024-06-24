"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserPosts } from "../_lib/getUserPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/post";

type Props = {
  username: string;
}
export default function UserPosts({ username }: Props) {
  // Object 타입: 객체 타입으로 간주될 수 있는 모든 값을 포함할 수 있다.
  // 타입 안전성을 위해서는 구체적인 에러 타입을 정의하는 것이 좋음. 에러 처리할 때 구체적인 값으로 변경하기
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['users', username]);
  
  if (user) {
    return data?.map((post) => (
      <Post key={post.postId} post={post} />
    ))
  }
  return null;
}