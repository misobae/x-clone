"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import style from './rightSearchZone.module.css';
import SearchForm from "./SearchForm";

function RightSearchZone() {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // readonly이기 때문에 수정을 하지 못함!
  const router = useRouter();

  const onChangeFollow = () => {
    const newSearchParams = new URLSearchParams(searchParams); // 기존의 쿼리 문자열을 기반으로 새로운 URLSearchParams 객체 생성
    newSearchParams.set('pf', 'on');
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onChangeAll = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('pf');
    router.replace(`/search?${newSearchParams.toString()}`);
  };

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