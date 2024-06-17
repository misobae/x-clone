import { auth } from "@/auth";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import RQProvider from "./_component/RQProvider";
import style from '@/app/(afterLogin)/layout.module.css';
import Logo from '../../../public/logo.png';
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import FollowRecommendSection from "./_component/FollowRecommendSection";
import RightSearchZone from "./_component/RightSearchZone";

export default async function AfterLoginLayout({
  children,
  modal
}: {
  children: ReactNode
  modal: ReactNode
}) {
  const session = await auth();
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href={session?.user ? "/home" : "/"}>
              <div className={style.logoPill}>
                <Image src={Logo} alt="logo" width={27} height={27} />
              </div>
            </Link>
            { session?.user && 
            <>
              <nav>
                <ul>
                  <NavMenu />
                </ul>
                <Link href="/compose/tweet" className={style.postButton}>Post</Link>
              </nav>
              <LogoutButton />
            </>
          }
          </div>
        </section>
      </header>
      <RQProvider>
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
      </RQProvider>
    </div>
  )
}