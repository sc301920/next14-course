"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import path from "path";

export default function Profile(){
    const router = useRouter();
    console.log(router);
    return <div>
        <h1>my list of profiles</h1>
        <div>
            <ul>
                <li onClick={()=>{ router.push('/pofile/1')}}>profile1</li>
                <Link href='/pofile/2'>profile2</Link>
                <a href="/pofile/3">profile3</a>
                <Link 
                    scroll={false}
                    prefetch={true}
                    href={{
                        pathname:"/pofile/4",
                        query:{
                            userName: 'klay'
                        }
                    }}>profile4</Link>
            </ul>
        </div>
    </div>
}