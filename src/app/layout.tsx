import '@/shared/styles/reset.css';
import type { Metadata } from 'next';
import { bodyStyle, wallpaperImageStyle, wallpaperStyle } from '@/shared/styles/globalStyle';
import InitialLoadingPage from '@/_pages/initial-loading-page/InitialLoadingPage';
import Image from 'next/image';
import wallpaper from '@/assets/macos-wallpaper.jpg';
import MissionControl from '@/components/mission-control/Container';
import { ReactElement, ReactNode } from 'react';

export const metadata: Metadata = {
  title: '개발자 성예인 포트폴리오',
  description: '개발자 성예인의 포트폴리오 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link href="https://www.uncon.net/MesloLGSNF-web-fonts/stylesheet.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body {...bodyStyle}>
        <div {...wallpaperStyle}>
          <Image
            width={wallpaper.width}
            height={wallpaper.height}
            src={wallpaper.src}
            sizes="100vw"
            alt="macos sonama wallpaper"
            {...wallpaperImageStyle}
          />
        </div>
        <MissionControl>
          <InitialLoadingPage index={0} />
          {children as ReactElement}
        </MissionControl>
      </body>
    </html>
  );
}
