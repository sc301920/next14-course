
"use client";

// import Image from 'next/image'
// import logo from  '../../public/logo_light.png'
// import next from  '../../public/next.svg'
import { useState } from 'react'
import { useAppContext } from '@/context';
import { useUserStore } from '@/store/user';
import MainSwiper from '@/components/mainSwiper';
import News from '@/components/News';
import { newsData } from '@/config/news'
export default function Home() {
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
  const { hello } = useAppContext()
  const user = useUserStore((state:any)=>state.user)
  const setUser = useUserStore((state:any)=>state.setUser)
  const sub = useUserStore.subscribe(()=>{
    console.log(user)
  })
  return (
    <main className="">
      <MainSwiper></MainSwiper>
      <section className='w-full min-h-96 py-10'>
        <div className='w-full max-w-screen-xl m-auto'>
          <h3 className='text-xl py-4'>NEWS</h3>
          <div>
            <News list={newsData} ></News>
          </div>
        </div>
      </section>
      {/* <h1>hello world</h1>
      <div>{hello}</div>
      <Image quality={60} src={logo} width={1000} height={1000} alt={''} />
      <div>
      <Image  src={next} width={360} height={360} alt={''} />
      <button onClick={fetchData} className='block w-20 h-20 bg-black'></button>
      </div>
      <p>{user.name}</p>
      <input type="text" onChange={(e:any)=>{
        setUser({name:e.target.value})
      }}/> */}
    </main>
    // <div>my main page of app</div>
  )
}
