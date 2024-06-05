import style from './trendSection.module.css';
import Trend from "@/app/(afterLogin)/_component/Trend";

export default function TrendSection() {
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