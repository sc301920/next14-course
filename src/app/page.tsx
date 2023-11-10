
"use client";

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import logo from  '../../public/logo_light.png'
import next from  '../../public/next.svg'
import { useState } from 'react'

export default function Home() {
  const name = "klay"
  const  [loading, setLoading] = useState(false)
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api',{
        headers: {
          Accept: 'application/json',
          method: "GET",
        },
      })
      if(response){
        const data = await response.json();
        console.log(data)
      }
    }catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <main className="">
      <Header name={name}/>
      <h1>hello world</h1>
      <Image quality={60} src={logo} width={1000} height={1000} alt={''} />
      <div>
      <Image  src={next} width={360} height={360} alt={''} />
      <button onClick={fetchData} className='block w-20 h-20 bg-black'></button>
      </div>
      <Footer />
    </main>
    // <div>my main page of app</div>
  )
}
