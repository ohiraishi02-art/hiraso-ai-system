import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: '広告代理店 診断｜無料',
  description: '今の広告代理店、このままで大丈夫？10の質問に答えるだけで課題と改善ポイントがわかります。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" style={{ overflowY: 'scroll' }}>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#F2F7F5', minHeight: '100vh' }}>
        {children}
        <Analytics />
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
