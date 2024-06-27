"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { getPostRecommends } from "../_lib/getPostRecommends";
import { Post as IPost } from "@/model/post";

import Post from "@/app/(afterLogin)/_component/Post";

export default function PostRecommends() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({ 
                            // <쿼리 함수가 반환하는 데이터 타입, 에러 객체 타입, infinite 쿼리 데이터 구조, 쿼리 키 타입, 페이지 파라미터 타입>
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId, // arr.at(음수): 배열의 끝에서부터 요소에 접근. -1은 마지막 요소를 반환함
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError) {
    return 'Error';
  }

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => <Post key={post.postId} post={post}/>)}
        </Fragment>))}
      <div ref={ref} style={{height: 50}}/>
    </>
  )
}