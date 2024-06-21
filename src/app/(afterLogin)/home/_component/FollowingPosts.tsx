"use client";

import { useQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "../_lib/getFollowingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/post";


export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, // fresh -> stale (캐시를 얼마나 오랫 동안 간직할까)
    gcTime: 300 * 1000,
  });

  return data?.map((post) => (
    <Post key={post.postId} post={post} />
  ))
}