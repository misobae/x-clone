import Link from "next/link";
import style from './trend.module.css';
import { Hashtag } from "@/model/hashtag";

type Prop = { trend: Hashtag };

export default function Trend({ trend }: Prop) {
  return (
    <Link href={`/search?q=${trend.title}`} className={style.container}>
      <div className={style.count}>Trending in South Korea</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  )
}