"use client";

import { Fragment } from "react";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getFollowingPosts } from "../_lib/getFollowingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/post";
import useInfiniteScroll from "@/\bhooks/useInfiniteScroll";


export default function FollowingPosts() {
  const { data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError } = useInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ['posts', 'followings'],
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale (캐시를 얼마나 오랫 동안 간직할까)
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
          {page.map((post) => <Post key={post.postId} post={post}/>)}
        </Fragment>))}
      <div ref={ref} style={{height: 50}}/>
    </>
  )
}