import SearchForm from "../_component/SearchForm";
import TrendSection from "./_component/TrendSection";
import style from "./explore.module.css";

export default function Explore() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>Trends for you</h3>
        <TrendSection />
      </div>
    </main>
  )
}