
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useNavigate } from "react-router-dom";

import movies from '../../data/movies'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  let navigate = useNavigate();
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
            movies.results.map((x) =>
              <SwiperSlide>
                <div onClick={() => { }} className='preview-slide rounded-0 m-4'>
                  <div className='slider d-flex pointer'>
                    <img style={{ minWidth: "100%", height: "100%", borderRadius: '30px' }} src={'https://image.tmdb.org/t/p/w500' + x.backdrop_path} alt={x.title} />
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