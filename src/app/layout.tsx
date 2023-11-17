
import type { Metadata } from 'next'
import { Inter, Roboto, Agbalumo } from 'next/font/google'
import './globals.css'
import { AppWrapper } from '@/context/index';
import { footerData } from '@/config/footer'
import { headerData } from '@/config/header';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// const inter = Inter({ subsets: ['latin'] })
// const inter = Roboto({ weight: '400', subsets: ['latin'] })
const inter = Agbalumo({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Header {...headerData} />
          <div>{children}</div>
          <Footer {...footerData} />
        </AppWrapper>
      </body>
    </html>
  )
}
