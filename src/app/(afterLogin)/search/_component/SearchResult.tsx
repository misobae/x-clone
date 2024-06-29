"use client";

import { Fragment } from "react";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useInView } from "react-intersection-observer";
import { Post as IPost } from '@/model/post';
import { getSearchResult } from "@/app/(afterLogin)/search/_lib/getSearchResult";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}

export default function SearchResult({ searchParams }: Props) {
  // 타입스크립트 제네릭: 타입을 함수의 "파라미터처럼" 사용하는 것
  // useQuery<받아올 데이터 타입, 에러 타입, 사용할 데이터 타입, 검색 키워드 타입>
  const { data, fetchNextPage, hasNextPage, isFetching, isError } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string, Props['searchParams']], number | undefined>({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useInfiniteScroll({ inView, isFetching, hasNextPage, fetchNextPage });

  if (isError) {
    return 'Error';
  }

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => <Post key={post.postId} post={post} />)}
        </Fragment>
      ))}
      <div ref={ref} style={{height: 50}} />
    </>
  )
}