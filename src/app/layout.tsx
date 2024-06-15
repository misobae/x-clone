import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MSWComponent } from "./_component/MSWComponent";
import AuthSession from "./_component/AuthSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s / X",
    default: "X",
  },
  description: "뉴스 속보, 정치, 유행하는 음악, 전 세계에서 벌어지는 이벤트와 스포츠 경기 득점 결과까지, 최신 글로벌 뉴스 기사를 실시간으로, 그리고 더 적은 데이터로 확인하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <AuthSession>
          {children}
        </AuthSession>
      </body>
    </html>
  );
}
