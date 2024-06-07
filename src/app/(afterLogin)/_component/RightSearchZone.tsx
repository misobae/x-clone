"use client";

import { usePathname } from "next/navigation";
import style from './rightSearchZone.module.css';
import SearchForm from "./SearchForm";

function RightSearchZone() {
  const pathname = usePathname();
  const onChangeFollow = () => {};
  const onChangeAll = () => {};

  if (pathname === '/explore') {
    return null;
  }

  if (pathname === '/search') {
    return (
      <div>
        <h5 className={style.filterTitle}>Search filters</h5>
        <div className={style.filterSection}>
          <div>
            <label>People</label>
            <div className={style.radio}>
              <div>From anyone</div>
              <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
            </div>
            <div className={style.radio}>
              <div>People you follow</div>
              <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={style.searchWrap}>
        <SearchForm />
      </div>
      <div className={style.emptyBox}></div>
    </>
  )
}

export default RightSearchZone;