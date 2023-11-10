"use client";
import { useParams, useRouter,  } from 'next/navigation'
export default function ProfileID(){
    const parmas = useParams()
    const router = useRouter()
    return (
        <div>
            <h1>my ProfileID page {parmas.id}</h1>
            <div onClick={()=>{router.push('/pofile')}}>back to main page</div>
        </div>
    )
}