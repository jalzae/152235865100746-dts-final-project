
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { useSelector } from "react-redux";

const Slider = () => {
  let navigate = useNavigate();
  const banner = useSelector((state) => state.contentRTK.banner);
  SwiperCore.use([Navigation]);


  return (
    <div className="sec-banner bg0 p-b-50">
      <div className="col-lg-12">
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          navigation={true}
          loop={true}
          onSlideChange={(swiper) => { }}
          onSwiper={(swiper) => { }}
          onReachEnd={(swiper) => { }}
        >
          {
            banner.map((x) =>
              <SwiperSlide>
                <div onClick={() => { }} className='preview-slide rounded-0 m-4'>
                  <div className='slider d-flex pointer'>
                    <img style={{ minWidth: "100%", height: "100%", borderRadius: '30px' }} src={'https://idcosmart.ebasid.com/' + x.banner_event} alt={x.name_event} />
                  </div>
                </div>
              </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;