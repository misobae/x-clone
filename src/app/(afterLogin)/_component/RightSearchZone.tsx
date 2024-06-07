"use client";

import { usePathname } from "next/navigation";
import style from './rightSearchZone.module.css';
import SearchForm from "./SearchForm";

function RightSearchZone() {
  const pathname = usePathname();

  if (pathname === '/explore') {
    return null;
  }

  return (
    <div className={style.searchWrap}>
      <SearchForm />
    </div>
  )
}

export default RightSearchZone;