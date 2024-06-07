"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from '../search.module.css';

export default function Tab() {
  const [current, setCurrent] = useState('top');
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickTop = () => {
    setCurrent('top');
    router.replace(`/search?q=${searchParams.get('q')}`)
  }
  const onClickNew = () => {
    setCurrent('new');
    router.replace(`/search?${searchParams.toString()}&f=live`)
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickTop}>
          Top
          <div className={style.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          Latest
          <div className={style.tabIndicator} hidden={current === 'top'}></div>
        </div>
      </div>
    </div>
  );
}