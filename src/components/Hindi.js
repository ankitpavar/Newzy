import React, { useState, useEffect } from 'react';
import { instance2 } from '../axios';
import { CircularProgress } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual } from 'swiper';
import { breakpoints } from '../responsive';
import 'swiper/swiper.scss';

import Card from './Card';

SwiperCore.use([Virtual]);

function Hindi({ title, fetchUrl, language }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchNews = async () => {
      const request = await instance2.get(fetchUrl);
      setNews(request.data.articles);
      setLoading(false);
      return request;
    };
    fetchNews();
  }, [fetchUrl, language]);
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-white text-3xl md:mt-12 sm:mt-12 sm1:mt-12 sm2:mt-12 sm3:mt-12 sm4:mt-12 sm5:mt-12 sm6:mt-12 font-extrabold mb-6 border-b-2 border-red-500 ">
          {title}
        </h1>
        <div className="text-red-500 text-xs inline-flex items-center sm:mt-16 sm1:mt-16 sm2:mt-16 sm3:mt-16 sm4:mt-16 sm5:mt-16 sm6:mt-16 md:mt-16 lg:mb-0">
          Swipe more
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-6 h-80">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <Swiper
            spaceBetween={30}
            breakpoints={breakpoints}
            slidesPerView={3}
            virtual
          >
            {news.map((newzy, index) => (
              <SwiperSlide key={index}>
                <Card newzy={newzy} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
}

export default Hindi;
