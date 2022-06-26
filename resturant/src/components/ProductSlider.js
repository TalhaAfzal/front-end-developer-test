import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import ProductCard from './ProductCard'

// import images 
import img1 from '../imgs/chocolate.jpg'
import img2 from '../imgs/iceCreame.jpg'
import img3 from '../imgs/maple.jpg'
import img4 from '../imgs/glazed.jpg'
import img5 from '../imgs/pizza.jpg'
import img6 from '../imgs/hot-dish.jpg'
import img7 from '../imgs/Chicken-Curry.jpg'
import img8 from '../imgs/burgers.jpg'
import img9 from '../imgs/salad.jpg'
import img10 from '../imgs/turkish-foods.jpg'

const ProductSlider = () => {


    const url = 'https://demo2.meals4u.net/fe/api.test.php'
    const [categoryname, setCategoryName] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCategoryName(response.data.categories)
                console.log("responce =============",response.data.categories)
            })
    }, [url])


    return (

        <div className="container py-4 px-3 justify-content-center ">

            {/* <h2>{categoryname + " "}</h2> */}
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={7}
                breakpoints={{
                    320:{
                        slidesPerView:1,
                        spaceBetween:20,
                    },
                    400:{
                        slidesPerView:3,
                        spaceBetween:20,
                    },
                    768:{
                        slidesPerView:4,
                        spaceBetween:20,
                    },
                    1000:{
                        slidesPerView:7,
                        spaceBetween:20,
                    }
                }}
            >


                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img1, name: categoryname[0] }} />
                </SwiperSlide>

                 <SwiperSlide>
                    <ProductCard data={{ imgSrc: img2, name: categoryname[1] }} />

                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img3, name: categoryname[2] }} />

                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img4, name: categoryname[3] }} />

                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img5, name: categoryname[4] }} />

                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img6, name: categoryname[5] }} />

                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img7, name: categoryname[6] }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img8, name: categoryname[7] }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img9, name: categoryname[8] }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img10, name: categoryname[9] }} />
                </SwiperSlide> 


            </Swiper>
        </div>
    )
}


export default ProductSlider