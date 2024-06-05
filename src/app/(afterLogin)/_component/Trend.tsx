import Link from "next/link";
import style from './trend.module.css';

export default function Trend() {
  return (
    <Link href={`/search?q=trend`} className={style.container}>
      <div className={style.count}>Trending in South Korea</div>
      <div className={style.title}>고양이</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  )
}