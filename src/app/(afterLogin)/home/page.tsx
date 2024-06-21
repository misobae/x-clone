import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import PostRecommends from "./_component/PostRecommends";
import { getPostRecommends } from "./_lib/getPostRecommends";

export default async function Home() {
  const queryClient = new QueryClient(); // QueryClient 인스턴스 생성 (데이터 관리)
  await queryClient.prefetchQuery({ // 데이터 미리 가져오기
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends
  });
  const dehydratedState = dehydrate(queryClient); // queryClient의 상태를 직렬화. 서버 사이드에서 가져온 데이터를 클라이언트로 전달하기 위해 사용
  // 직렬화? 데이터 구조나 객체 상태를 저장하거나 전송할 수 있도록 바이트 스트림으로 변환하는 과정. 바이트 스트림으로 변환해야 네트워크 전송이 가능함
  return (
    <main className={style.main}>
      {/* HydrationBoundary: 직렬화된 데이터를 React Query의 상태로 복원하여 클라이언트 측에서 사용할 수 있도록 돕는 역할 */}
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab/>
          <PostForm />
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  )
}