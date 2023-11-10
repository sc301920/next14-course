import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About',
  description: 'About',
  openGraph: {
    title: 'About',
    description: 'About',
    url: "mywebsite.com",
    siteName: "klay",
    images: [
      {
        alt: 'About',
        width: 800,
        height: 600,
        url: '/logo_light.png',
      },
    ],
    locale: 'en-EN'
  }
}

export default function About(){
    return <div>About page</div>
}