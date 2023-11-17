import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
export default function MainSwiper(){
  const partnerLogo: Array<string> = [
    '/swiper1.jpg',
    '/swiper2.jpg',
  ];
  const partnerSolgan: Array<string> = [
    '九大创新提升生活品质',
    '全面有序开放微信支付商户网络',
  ];
  return (
    <div className='w-full box-content relative'>
      <div className='w-full absolute left-0 bottom-10 z-10'>
        <div className='w-full max-w-screen-xl m-auto flex justify-between px-4'>
          <div className='flex'>
          <div className='swiper-prev '><Image className='rotate-180 cursor-pointer mr-2' width={56} height={16} src='/icon_arrow_r.png' alt='icon_arrow_l' /></div>
          <div className='swiper-next '><Image className='swiper-next cursor-pointer' width={56} height={16} src='/icon_arrow_r.png' alt='icon_arrow_r' /></div>
          </div>
          {/* <div className='pagination-house flex'>
          {
            partnerLogo.map((value, index) => {
            return (
              <span className='w-5 h-5 bg-white ml-2 cursor-pointer select-none' key={index}>{index}</span>
            )
            })
          }
          </div> */}
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        autoplay
        navigation={{
          nextEl: '.swiper-prev',
          prevEl: '.swiper-next',
          hideOnClick: true
        }}
        // navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{
          // el: 'pagination-house',
          clickable: true
        }}
      >
        {partnerLogo.map((value, index) => {
          return (
            <SwiperSlide key={index} className='w-full relative overflow-hidden'>
              {/* <Image className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' width={1280} height={852} src={value} alt='value' /> */}
              <div className='h-96 py-40 box-content bg-no-repeat bg-center bg-cover text-white flex items-center' style={{ backgroundImage :  `url(${value})` }} >
                <div className='w-full max-w-screen-xl m-auto px-4'>
                  <h2 className='text-5xl my-4 max-sm:text-3xl'>{partnerSolgan[index]}</h2>
                  <h5 className='text-lg my-6 max-sm:hidden'>{partnerSolgan[index]}</h5>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}