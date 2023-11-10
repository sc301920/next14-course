"use client";
import Menu from "./menu"
interface headerProps{
    name: string
}

export default function Header(props:headerProps){
    return (<header>
        <div>logo {props.name}</div>
        {/* <div>menu</div> */}
        <Menu {...props}/>
    </header>
    )
}