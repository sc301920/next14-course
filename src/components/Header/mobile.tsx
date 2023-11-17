import { useState } from 'react';
export default function MobileMenuIcon({isOpen, setOpen}:any){
    return (
        <div 
            className="w-6 h-6 hidden max-lg:block relative  cursor-pointer z-20"
            onClick={() => setOpen(!isOpen)}
        >
            <div className={["w-6 h-0.5 bg-white absolute top-1 ", isOpen? "hidden":'block'].join('')}></div>
            <div className={["w-6 h-0.5  absolute top-3 ", isOpen? "rotate-45 bg-black":'rotate-0 bg-white'].join('')}></div>
            <div className={["w-6 h-0.5  absolute top-3 ", isOpen? "-rotate-45 bg-black":'rotate-0 bg-white'].join('')}></div>
            <div className={["w-6 h-0.5 bg-white absolute top-5 ", isOpen? "hidden":'block'].join('')}></div>
        </div>
    )
}