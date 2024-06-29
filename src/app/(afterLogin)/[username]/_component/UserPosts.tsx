"use client";

import { InfiniteData, useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { Post as IPost } from "@/model/post";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import getUserPosts from "../_lib/getUserPosts";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = {
  username: string;
}

export default function UserPosts({ username }: Props) {
  // Object 타입: 객체 타입으로 간주될 수 있는 모든 값을 포함할 수 있다.
  // 타입 안전성을 위해서는 구체적인 에러 타입을 정의하는 것이 좋음. 에러 처리할 때 구체적인 값으로 변경하기
  const { data, fetchNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery<IPost[], Error, InfiniteData<IPost[]>, [_1: string, _2: string, string], number | undefined>({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['users', username]);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useInfiniteScroll({ inView, isFetching, hasNextPage, fetchNextPage });

  if (isError) {
    return 'Error';
  }

  if (!data || !user) {
    return null;
  }

  return (
    <>
      {data.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => <Post key={post.postId} post={post} />)}
        </Fragment>
      ))}
      <div ref={ref} style={{height: 50}}/>
    </>
  );
}
