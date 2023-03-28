import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import data from "./newsData";
import { Card, CardBody, Flex, Image, Link } from "@chakra-ui/react";
import "./News.css";

const SwipperMobile = () => {
  return (
    <React.Fragment>
      <div className="swiperMobile">
        <Swiper
          //   slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <div className="" key={item.id}>
                <SwiperSlide>
                  <Card maxW="md" className="card__bg cardSlide">
                    <Image
                      objectFit="cover"
                      height={"200px"}
                      src={item.image}
                      alt="Sport image"
                      className="newsImage"
                    />
                    <CardBody className="newsBody">
                      <Flex
                        justifyContent={"space-between"}
                        alignItems="center"
                        p={"2px 0px 20px 0px"}
                      >
                        <h4>{item.sport}</h4>
                        <h5>{item.time}</h5>
                      </Flex>
                      <Link className="link">
                        <p>{item.link}</p>
                      </Link>
                      <div className="content">
                        <p>{item.content}</p>
                      </div>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default SwipperMobile;
