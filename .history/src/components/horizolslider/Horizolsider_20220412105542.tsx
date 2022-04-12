import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'

type Props = {}

const Wrapper = styled.div`
    width: 700px;
    /* margin: auto; */
`
const Item = styled.div`
    height: 150px;
    margin-top: 50px;
    transition: all .3s;
    position: relative;
    /* display: flex !important;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 100px; */
    /* position: relative;
     */
    /* margin: 0 15px; */
    .info{
        visibility: hidden;
        width: 100%;
        border: 1px solid #252525;
        height: 200px;
        position: absolute;
        z-index: 1000;
        top: 100%;
    }
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
        centerPadding: '0px',
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

                            </Item>
                        )
                    }
                </Slider>
            </Wrapper>
            <div className="info">info {activeIndex}
            </div>
        </div>
    )
}
export default Horizolsider