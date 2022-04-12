import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'

type Props = {}

const Wrapper = styled.div`
    width: 700px;
     
`
const Item = styled.div`
    /* height: 150px; */
    margin-top: 50px;
    transition: all .3s;
    position: relative;
    img{
        object-fit: cover;
        margin: 0 auto;
        /* width: 100px;
        height: 100px; */
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all .3s;
    }
    /* .info{
        position: absolute;
    } */
    &.active{
        /* width: 150px;
        height: 100px; */
        /* height: 200px; */
        margin-top: 30px;
        img{
            
            /* width: 100%; */
            transform: scale(1.4)
        }
        .info{
            visibility: visible;
            transform: translateY(0px);  
        }
    }
    &.near{
        /* width: 150px;
        height: 100px; */
        /* height: 200px; */
        margin-top: 40px;
        img{
            
            /* width: 100%; */
            transform: scale(1.15)
        }
        

    }
`
const Horizolsider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const settings = {
        className: "listItem",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        // adaptiveHeight: true,
        beforeChange: (current: any, next: any) => {
            setActiveIndex(next)

        },
    };

    return (
        <div style={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Wrapper>
                <Slider {...settings}>
                    {
                        [...Array(10).keys()].map((i, index) =>
                            <Item className={`${index === activeIndex ? "active" : (activeIndex - index) === 1 || (index - activeIndex) === 1 || (index - activeIndex) === 9 || (index - activeIndex) === -9 ? "near" : ""}`}>
                                <img src={image1} alt="" />

                                <div className={`info ${activeIndex === index && "active"}`}>info {activeIndex}
                                </div>
                            </Item>
                        )
                    }
                </Slider>
            </Wrapper>
        </div>
    )
}
export default Horizolsider