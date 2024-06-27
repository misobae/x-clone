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
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('f');
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onClickNew = () => {
    setCurrent('new');
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('f', 'live');
    router.replace(`/search?${newSearchParams.toString()}`);
  };

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