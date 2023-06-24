import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./testimonial.css";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  const[testimonial, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://cyan-attractive-coyote.cyclic.app/testimonial")
      .then((response) => {
        const formattedData = response.data.map((item) => ({
          id: item._id,
          avatar: item.avatar,
          name: item.name,
          review: item.review,
          v: item.__v,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.log("error fetching portfolio data:", error);
      });
  }, []);

  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonial.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
