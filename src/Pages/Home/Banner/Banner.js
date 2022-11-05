import React from 'react';
import Img1 from "../../../assets/images/banner/1.jpg"
import Img2 from "../../../assets/images/banner/2.jpg"
import Img3 from "../../../assets/images/banner/3.jpg"
import Img4 from "../../../assets/images/banner/4.jpg"
import Img5 from "../../../assets/images/banner/5.jpg"
import Img6 from "../../../assets/images/banner/6.jpg"
import './Banner.css'
import BannerItems from './BannerItems';

const bannerData = [
    {
        image: Img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: Img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: Img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: Img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: Img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: Img6,
        prev: 5,
        id: 6,
        next: 1
    },
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">

            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;