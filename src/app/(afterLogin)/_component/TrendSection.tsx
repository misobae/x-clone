"use client";

import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import style from './trendSection.module.css';
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
  const pathname = usePathname();
  const { data } = useSession();

  if (pathname === '/explore') return null;
  if (data?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>Trends for you</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      </div>
    )
  }
  return null;
}