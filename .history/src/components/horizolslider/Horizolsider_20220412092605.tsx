import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
type Props = {}

const Wrapper = styled.div`
    width: 700px;
    /* margin: auto; */
    overflow-x: scroll;
    .overlay{
        display: flex;
        align-items: center;
    height: 500px;

        /* width: 100%; */
        /* height: 500px; */

    }
`
const Item = styled.div`
    /* position: relative;
    margin: 0 15px; */
    .info{
        visibility: hidden;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all .3s;
    }
    &.active{
        img{
            width: 150px;
            height: 150px;
        }
        .info{
            visibility: visible;
        }
    }
`
const Horizolsider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(2);
    const overlayRef = useRef<any>();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // useEffect(() => {
    //     console.log(overlayRef.current.style.transform);

    // }, [])

    return (
        <Slider {...settings}>

            {
                [...Array(10).keys()].map((i, index) => <div>
                    <img src={image1} alt="" />

                </div>)
            }
        </Slider>
    )
}
export default Horizolsider