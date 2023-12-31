import EmotionRootStyleRegistry from './emotion-root-style-registry';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <EmotionRootStyleRegistry>{children}</EmotionRootStyleRegistry>
      </body>
    </html>
  );
}
