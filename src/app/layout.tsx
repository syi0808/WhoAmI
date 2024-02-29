import '@/shared/styles/reset.css';
import type { Metadata } from 'next';
import { bodyStyle, wallpaperImageStyle, wallpaperStyle } from '@/shared/styles/globalStyle';
import Image from 'next/image';
import wallpaper from '@/assets/macos-wallpaper.jpg';
import MissionControl from '@/components/mission-control/Container';
import { ReactNode } from 'react';
import InitialLoadingPage from '@/_pages/initial-loading-page/InitialLoadingPage';
import { TabElemenet } from '@/components/mac-tab-container';

export const metadata: Metadata = {
  title: '개발자 성예인 포트폴리오',
  description: '개발자 성예인의 포트폴리오 입니다.',
};

const desktopItems: TabElemenet[] = [
  {
    element: <InitialLoadingPage index={0} />,
    label: InitialLoadingPage.displayName,
  },
];

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
        <MissionControl desktopItems={desktopItems}>{children}</MissionControl>
      </body>
    </html>
  );
}
