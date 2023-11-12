"use client";
import { useParams, useRouter, useSearchParams  } from 'next/navigation'
export default function ProfileID(){
    const parmas = useParams()
    const router = useRouter()
    const searchParams = useSearchParams()
    return (
        <div>
            <h1>my ProfileID page {parmas.id} {searchParams.get('userName')}</h1>
            <div onClick={()=>{router.push('/pofile')}}>back to main page</div>
        </div>
    )
}