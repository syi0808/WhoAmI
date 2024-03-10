import '@/shared/styles/reset.css';
import type { Metadata } from 'next';
import { bodyStyle, wallpaperImageStyle, wallpaperStyle } from '@/shared/styles/globalStyle';
import Image from 'next/image';
import wallpaper from '@/assets/macos-wallpaper.jpg';
import MissionControl from '@/components/mission-control/Container';
import { ReactNode } from 'react';
import InitialLoadingPage from '@/_pages/initial-loading-page/InitialLoadingPage';
import ChromeContainerPage from '@/_pages/chrome-container-page/ChromeContainerPage';
import { TabElemenet } from '@/components/mac-tab-container/types';
import { getIsBot } from '@/shared/utils/header';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: '개발자 성예인 포트폴리오',
  description: '개발자 성예인의 포트폴리오 입니다.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const isBot = await getIsBot();

  const desktopItems: TabElemenet[] = [
    ...(!isBot
      ? [
          {
            element: <InitialLoadingPage index={0} />,
            label: InitialLoadingPage.displayName,
          },
        ]
      : []),
    {
      element: <ChromeContainerPage index={1} />,
      label: ChromeContainerPage.displayName,
    },
  ];

  return (
    <html lang="ko">
      <head>
        <link href="https://www.uncon.net/MesloLGSNF-web-fonts/fonts/MesloLGS-NF-Regular.woff2" rel="preload" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff/Pretendard-Blod.woff"
          rel="preload"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff/Pretendard-Regular.woff"
          rel="preload"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff/Pretendard-Light.woff"
          rel="preload"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Blod.woff2"
          rel="preload"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2"
          rel="preload"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Light.woff2"
          rel="preload"
        />
        <GoogleAnalytics gaId="G-T1YWCLY4CM" />
      </head>
      <body {...bodyStyle}>
        <div {...wallpaperStyle}>
          <Image
            width={wallpaper.width}
            height={wallpaper.height}
            src={wallpaper.src}
            sizes="100vw"
            alt="macos sonama wallpaper"
            fetchPriority="low"
            {...wallpaperImageStyle}
          />
        </div>
        <MissionControl desktopItems={desktopItems}>{children}</MissionControl>
      </body>
    </html>
  );
}
