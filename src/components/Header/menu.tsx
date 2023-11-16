"use client";
import { useState } from "react";
export interface HeaderProps {
  menu: HeaderLink[];
  hover: Function;
  hoverIndex: Number
}

interface HeaderLink {
  name: string;
  href: string;
  list: ILink[];
}

interface ILink {
  name: string;
  href?: string;
}

export default function Menu({ menu, hover, hoverIndex }:HeaderProps){
  const [hoverMenuIndex, setMenuHoverIndex] = useState(-1);
  return ( 
    <div className="flex justify-center max-lg:hidden" 
      onMouseOver={() => {
        hover(-1);
      }}
      onMouseLeave={() => {
        hover(-2)
      }}
    >
      {
        menu.map((_item, _index) => {
          return <div className="ml-16 text-black-600 cursor-pointer relative" key={`link${_index}`}>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 "
              href={_item.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={() => {
                setMenuHoverIndex(_index);
              }}
              onMouseLeave={() => {
                setMenuHoverIndex(-2);
              }}
            > 
              {_item.name}
            </a>
            <ul 
              className={['absolute top-4 left-0 pt-4', hoverMenuIndex == _index?"block":"hidden"].join(' ')}
              onMouseOver={() => {
                setMenuHoverIndex(_index);
              }}
              onMouseLeave={() => {
                setMenuHoverIndex(-2);
              }}
            >
              {/* 下拉列表 */}
              {
                _item.list.map((_item2, _index2) => {
                  return <li className="py-1" key={`link${_index2}`}>{
                    <a
                      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                      href={_item2.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    > 
                      {_item2.name}
                    </a>
                  }</li>
                })
              }
            </ul>
          </div>
        })
      }
    </div>
  )
}

