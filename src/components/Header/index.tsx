"use client";
import { useState } from "react";
import Menu from "./menu";
import MobileMenuIcon from "./mobile";
import MobileMenu from "./mobileMenu";
import { useHeaderStore } from '@/store/header';
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header(props:HeaderProps){
  // const [isHover, setIsHover] = useState(false)
  const headerStore = useHeaderStore()
  const hoverIndex = useHeaderStore((state:any)=>state.hoverIndex)
  const setHoverIndex = useHeaderStore((state:any)=>state.setHoverIndex)
  // const [hoverIndex, setHoverIndex] = useState(-2);
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header 
      className={[
        'flex items-center justify-between w-full h-16 fixed top-0 left-0 px-5 z-10 ',
        hoverIndex>-2 ? 'text-black':' text-white',
        pathname == '/' ? ' ':' bg-white ']
        .join('')}
    >
      <a href="http://localhost:3000/">
        <h1><Image src={props.logo.image} alt={props.title.toString()} width={70} height={20} /></h1>
      </a>
      <Menu menu={props.menu} hover={setHoverIndex} hoverIndex={hoverIndex}/>
      <div 
        className={['w-full bg-white top-0 left-0 absolute z-[-1] h-64 transition-transform duration-500 ease-in-out', hoverIndex>-2 ? ' translate-y-0 ':' -translate-y-80'].join('')}
      ></div>
      <MobileMenuIcon isOpen={isOpen} setOpen={setOpen} />
      <MobileMenu menu={props.menu} isOpen={isOpen} setOpen={setOpen} />
    </header>
  )
}

// import { FC } from "react";
// import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
// import Image from "next/image";
// // import logoLight from "/logo_light.png";

export interface HeaderProps {
  logo: Logo;
  menu: HeaderLink[];
  isDarkMode: boolean;
  title: String
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

// interface ILinkList {
//   title: string;
//   list: ILink[];
// }

interface Logo {
  image: string;
  text: string;
}

// import { GetStaticProps } from 'next'
import mobile from './mobile';

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {
//       showMenu: false
//     }, // will be passed to the page component as props
//   }
// }

// export const NavBar: FC<HeaderProps> = ({ 
//   logo, 
//   links, 
//   isDarkMode,
//  }) => {
//   return (
//     <div className="flex items-center justify-between w-full h-16 sticky top-0 left-0 px-5 py-8 z-10">
//       <a href="http://localhost:3000/">
//         <Image src={logo.image} alt="Demo" width={70} height={20} />
//       </a>
//       <div className="flex justify-center max-lg:hidden">
//         {
//           links.map((_item, _index) => {
//             return <div className="ml-16 text-black-600 cursor-pointer" key={`link${_index}`}>
//               <a
//                 className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//                 href={_item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               > {_item.name}
//               </a>
//             </div>
//           })
//         }
//       </div>
//       <div className="hidden max-lg:block relative right-8">
//         <div className="w-8 h-0.5 bg-white absolute top-1"></div>
//         <div className="w-8 h-0.5 bg-white absolute top-3"></div>
//         <div className="w-8 h-0.5 bg-white absolute top-3"></div>
//         <div className="w-8 h-0.5 bg-white absolute top-5"></div>
//       </div>
//     </div>
//   );
// };


{/* <div class="wrap_head hestate" style="display: block; position: fixed; top: 0px;">
    <div class="head_con">
      <a class="logo" href="https://www.tencent.com/zh-cn/index.html"><h1>Tencent腾讯</h1></a>
      <ul class="menu_list" style="transform: translate(0px, 0px); opacity: 1;">
        <li class="menu_item">
          <a class="txt" href="https://www.tencent.com/zh-cn/about.html">简介</a>
          <ul class="sub_list" style="display: none;">
            <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-1">公司简介</a></li>
            <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-2">愿景及使命</a></li>
            <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-3">发展历程</a></li>
            <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-4">业务架构</a></li>
            <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-5">管理团队</a></li>
            <li><a href="https://www.tencent.com/zh-cn/investors/board-members.html">董事会成员</a></li>
            <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-6">企业文化</a></li>
            <li><a href="https://www.tencent.com/zh-cn/about.html#about-con-7">办公地点</a></li>
          </ul>
        </li>
        <li class="menu_item">
          <a class="txt" href="https://www.tencent.com/zh-cn/business.html">业务</a>
          <ul class="sub_list" style="display: none;">
            <li><a href="https://www.tencent.com/zh-cn/business.html">面向用户</a></li>
            <li><a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b">面向企业</a></li>
            <li><a href="https://www.tencent.com/zh-cn/business.html?page-active=innovation">创新科技</a></li>

          </ul>
        </li>
        <li class="menu_item">
          <a class="txt" href="https://www.tencent.com/zh-cn/employees.html">员工</a>
          <ul class="sub_list" style="display: none;">
            <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-1">人才发展</a></li>
            <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-2">腾讯学堂</a></li>
            <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-3">工作环境</a></li>
            <li><a href="https://www.tencent.com/zh-cn/employees.html#staff-con-4">员工活动</a></li>
          </ul>
        </li>
        <li class="menu_item">
          <a class="txt" href="https://www.tencent.com/zh-cn/esg.html">ESG</a>
          <ul class="sub_list" style="display: none;">
            <li><a href="https://www.tencent.com/zh-cn/esg.html#respon-con-1">环境</a></li>
            <li><a href="https://www.tencent.com/zh-cn/esg.html#respon-con-2">社会</a></li>
            <li><a href="https://www.tencent.com/zh-cn/esg.html#respon-con-3">治理</a></li>
            <li><a href="https://www.tencent.com/zh-cn/esg.html#respon-con-6">ESG评级</a></li>
            <li><a href="https://www.tencent.com/zh-cn/esg.html#respon-con-7">报告</a></li>
          </ul>
        </li>
        <li class="menu_item">
          <a class="txt" href="https://www.tencent.com/zh-cn/investors.html">投资者</a>
          <ul class="sub_list" style="display: none;">
            <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-1">季度业绩及投资者新闻</a></li>
            <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-2">公告及财务报告</a></li>
            <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-3">业绩电话会及投资者日历</a></li>
            <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-4">投资者工具包</a></li>
            <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-5">证券及债券信息</a></li>
            <li><a href="https://www.tencent.com/zh-cn/investors.html#investors-con-6">环境、社会及管治</a></li>
          </ul>
        </li>
        <li class="menu_item">
          <a class="txt" href="https://www.tencent.com/zh-cn/media.html">媒体</a>
          <ul class="sub_list" style="display: none;">
            <li><a href="https://www.tencent.com/zh-cn/media/news.html?type=media">企业动态</a></li>
            <li><a href="https://www.tencent.com/zh-cn/media/news.html?type=financial">财务新闻</a></li>
            <li><a href="https://www.tencent.com/zh-cn/media/perspective.html">腾讯视角</a></li>
            <li><a href="https://www.tencent.com/zh-cn/media/library.html">媒体资料库</a></li>
          </ul>
        </li>

        <li class="menu_item menu_item_lan">
                                <a class="cn" lang="zh-cn">简体</a>                                    <i class="s_line">|</i>                                  <a class="hk" lang="zh-hk">繁体</a>                        <i class="s_line">|</i>                                              <a class="en" lang="en-us">English</a>                              </li>

      </ul>
      <!--<div class="search_area">
        <a href="##" class="search_icon"></a>
        <input type="text" class="ipt_search" value="" placeholder="请输入您想搜索的关键字" />
      </div>-->
      <div class="lang_area">
                          <a class="lang_ch current" lang="zh-cn">简</a>                              <i class="s_line">|</i>                            <a class="lang_hk" lang="zh-hk">繁</a>                    <i class="s_line">|</i>                                      <a class="lang_en" lang="en-us">EN</a>                        </div>
    </div>
    <div class="icon_menu">
      <a class="i_menu"></a>
      <a class="i_close"></a>
    </div>
    <div class="bg_hover"></div>
  </div> */}