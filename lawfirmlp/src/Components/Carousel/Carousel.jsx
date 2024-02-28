import React , { useRef }from "react";
import { Navigation } from 'swiper/modules';
import { PrevButton, NextButton } from "../../Components/NavButtons/NavButtons";
import { Data } from "../../Data/CarouselData";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import {Button} from '@mui/material'
import { useSwiper } from 'swiper/react';
import { Box } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClientsCards from "../Cards/ClientsCards/ClientsCards";

const Carousel = () => {

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom : '3rem'
        }}
      >
        <SectionHeading
          text="What says our happy Clients"
          color="white"
          sx={{ marginBottom: "3rem" }}
        />
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap : "1rem"
        }}
      >
        <Button sx={{
            backgroundColor : 'white',
            borderRadius : '50px',
            height: '90.61px',
            width: '90.61px',
            display : "none"
        }}
        >
          <ArrowBackIcon fontSize={"large"} sx={{color : "black"}}  />
        </Button>
      </Box>
      </Box>
      <Swiper
      modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {Data.map((data) => (
          <SwiperSlide>
            {" "}
            <ClientsCards
              img={data.img}
              name={data.name}
              description={data.description}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
