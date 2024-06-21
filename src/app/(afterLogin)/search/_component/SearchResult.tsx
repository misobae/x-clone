"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from '@/model/post';
import { getSearchResult } from "@/app/(afterLogin)/search/_lib/getSearchResult";
import { useQuery } from "@tanstack/react-query";

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}
export default function SearchResult({ searchParams }: Props) {
  // 타입스크립트 제네릭: 타입을 함수의 "파라미터처럼" 사용하는 것
  // useQuery<받아올 데이터 타입, 에러 타입, 사용할 데이터 타입, 검색 키워드 타입>
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, Props['searchParams']]>({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((post) => (
    <Post key={post.postId} post={post} />
  ))
}