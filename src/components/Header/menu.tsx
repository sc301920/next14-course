"use client";

interface headerProps{
    name: string
}

export default function Menu({name}:headerProps){
    return ( 
    <div> {name}</div>
    )
}