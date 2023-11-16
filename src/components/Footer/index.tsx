"use client";
import Image from "next/image";
export default function Footer(props:IFooterProps){
  return (
    <footer className="w-full px-16 py-16 bg-gray-200">
      <div className="flex justify-between mb-3 flex-wrap max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <h1 className=" font-medium text-4xl text-gray-800 max-lg:mb-4">{props.title}</h1>
        <div className="flex flex-wrap max-sm:justify-center">
          {props.linkList?.map((item, index) => {
            return (
              <div className=" flex-col max-sm:w-full sm:mr-40 max-sm:items-center" key={`linkArea${index}`}>
                <div className=" font-medium text-sm text-gray-900 max-sm:text-center max-lg:my-4">{item.title}</div>
                <div className="flex-col font-normal text-sm text-gray-500 mt-6 max-sm:text-center">
                  {item.list?.map((_item, _index) => {
                    return (
                      <div
                        // className="{cName({
                        //   [styles.link]: _item.link,
                        //   [styles.disabled]: !_item.link,
                        // })}"
                        className={[ 'mb-4', _item.link?"cursor-pointer":"cursor-not-allowed"].join(' ')}
                        // onClick={(): void => {
                        //   _item.link &&
                        //     window.open(
                        //       _item.link,
                        //       "blank",
                        //       "noopener=yes,noreferrer=yes"
                        //     );
                        // }}
                        key={`link${_index}`}
                      >
                        {_item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between flex-wrap  max-sm:justify-center max-sm:items-center ">
        <div className="flex flex-col max-sm:justify-center max-sm:items-center max-sm:mb-4">
            <Image
              src={props.qrCode?.image}
              alt={props.qrCode?.text}
              width={56}
              height={56}
            ></Image>
          <div className="text-black-900 mt-2">{props.qrCode?.text}</div>
        </div>
        <div className="flex flex-col flex-wrap items-end text-sm font-normal text-right max-sm:justify-center max-sm:items-center max-sm:w-full">
          <span className="mb-3">{props.copyRight}</span>
          <span className="mb-3">{props.siteNumber}</span>
          <div className="flex">
            <div className="ml-1">
              <Image
                src='/public_logo.png'
                alt={props.publicNumber}
                width={20}
                height={20}
              ></Image>
            </div>
            <span>{props.publicNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// import { FC } from "react";
// import Image from "next/image";
interface ILink {
  label: string;
  link?: string;
}

interface ILinkList {
  title: string;
  list: ILink[];
}

interface IQRCode {
  image: string;
  text: string;
}

export interface IFooterProps {
  title: string;
  linkList: ILinkList[];
  qrCode: IQRCode;
  copyRight: string;
  siteNumber: string; // 站点备案号
  publicNumber: string; // 公安备案号
}

// export const Footer: FC<IFooterProps> = ({
//   title,
//   linkList,
//   qrCode,
//   copyRight,
//   siteNumber,
//   publicNumber,
// }) => {
//   return (
//     <footer className="w-full px-16 py-16 bg-gray-200">
//       <div className="flex justify-between mb-3 flex-wrap max-sm:flex-col max-sm:justify-center max-sm:items-center">
//         <h1 className=" font-medium text-4xl text-gray-800 max-lg:mb-4">{title}</h1>
//         <div className="flex flex-wrap max-sm:justify-center">
//           {linkList?.map((item, index) => {
//             return (
//               <div className=" flex-col max-sm:w-full sm:mr-40 max-sm:items-center" key={`linkArea${index}`}>
//                 <div className=" font-medium text-sm text-gray-900 max-sm:text-center max-lg:my-4">{item.title}</div>
//                 <div className="flex-col font-normal text-sm text-gray-500 mt-6 max-sm:text-center">
//                   {item.list?.map((_item, _index) => {
//                     return (
//                       <div
//                         // className="{cName({
//                         //   [styles.link]: _item.link,
//                         //   [styles.disabled]: !_item.link,
//                         // })}"
//                         className={[ 'mb-4', _item.link?"cursor-pointer":"cursor-not-allowed"].join(' ')}
//                         // onClick={(): void => {
//                         //   _item.link &&
//                         //     window.open(
//                         //       _item.link,
//                         //       "blank",
//                         //       "noopener=yes,noreferrer=yes"
//                         //     );
//                         // }}
//                         key={`link${_index}`}
//                       >
//                         {_item.label}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex justify-between flex-wrap  max-sm:justify-center max-sm:items-center ">
//         <div className="flex flex-col max-sm:justify-center max-sm:items-center max-sm:mb-4">
//             <Image
//               src={qrCode?.image}
//               alt={qrCode?.text}
//               width={56}
//               height={56}
//             ></Image>
//           <div className="text-black-900 mt-2">{qrCode?.text}</div>
//         </div>
//         <div className="flex flex-col flex-wrap items-end text-sm font-normal text-right max-sm:justify-center max-sm:items-center max-sm:w-full">
//           <span className="mb-3">{copyRight}</span>
//           <span className="mb-3">{siteNumber}</span>
//           <div className="flex">
//             <div className="ml-1">
//               <Image
//                 src='/public_logo.png'
//                 alt={publicNumber}
//                 width={20}
//                 height={20}
//               ></Image>
//             </div>
//             <span>{publicNumber}</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
