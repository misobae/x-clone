"use client";

import { useQuery } from "@tanstack/react-query";
import { User } from "@/model/user";
import { getFollowRecommends } from "@/app/(afterLogin)/_lib/getFollowRecommends";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import style from './followRecommendSection.module.css';

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  })

  return (
  <div className={style.followRecommend}>
    <h3>Who to follow</h3>
    {data?.map((user) => <FollowRecommend user={user} key={user.id} />)}
  </div>
  )
}