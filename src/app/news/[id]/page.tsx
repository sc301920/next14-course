"use client";
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useHeaderStore } from '@/store/header'
import { useEffect } from 'react'
export default function ProfileID(){
    const parmas = useParams()
    const router = useRouter()
    const hoverIndex = useHeaderStore((state:any)=>state.hoverIndex)
    const setHoverIndex = useHeaderStore((state:any)=>state.setHoverIndex)
    // const searchParams = useSearchParams()
    // const post = getPostById(parmas.id.toString())
    useEffect(() => {
        console.log("Hello");
        setHoverIndex(-1)
    }, []);
    return (
        <div className='w-full max-w-screen-xl m-auto h-96 py-16'>
            {/* <h1>my ProfileID page {parmas.id} {searchParams.get('userName')}</h1> */}
            <h1>{parmas.id}</h1>
            {/* <div onClick={()=>{router.push('/pofile')}}>back to main page</div> */}
            {/* <div>{post}</div> */}
        </div>
    )
}

async function getPostById(id:string){
    const res = await fetch(`/api/post/${id}`, {
        method: 'GET',
    });
    return res.json()
}