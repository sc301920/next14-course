"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function News({list}:any){
    const router = useRouter();
    return (
        <div className="w-full flex gap-4">
            {
                list.map((item:any,index:any)=>{
                    return (
                        <div className="shadow cursor-pointer" key={index} onClick={()=>{
                            router.push(`/news/${item.id}`)
                        }}>
                            {/* <Image src={item.picurl} width={200} height={50} ></Image> */}
                            <div className="w-full h-40 box-content bg-center bg-no-repeat" style={{backgroundImage: `url(${item.picurl})`}}></div>
                            <div className="p-4">
                            <div className="text-xl">{item.time}</div>
                            <div className="text-lg my-2">{item.title}</div>
                            <div className="text-sm">{item.description}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}