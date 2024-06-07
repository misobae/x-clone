import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import style from '@/app/(afterLogin)/layout.module.css';
import Logo from '../../../public/logo.png';
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import FollowRecommendSection from "./_component/FollowRecommendSection";
import RightSearchZone from "./_component/RightSearchZone";

export default function AfterLoginLayout({
  children,
  modal
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={Logo} alt="logo" width={27} height={27} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>Post</Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <FollowRecommendSection />
          </section>
        </div>
      </div>
    {modal}
    </div>
  )
}