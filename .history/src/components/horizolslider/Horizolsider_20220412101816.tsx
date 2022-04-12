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
    /* display: flex !important;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 100px; */
    /* position: relative;
     */
    /* margin: 0 15px; */
    .info{
        visibility: hidden;
    }
    img{
        object-fit: cover;
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
            transform: scale(1.5)
        }
        .info{
            visibility: visible;
        }
    }
`
const Horizolsider = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
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
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
            <Wrapper>
                <Slider {...settings}>
                    {
                        [...Array(10).keys()].map((i, index) =>
                            <Item className={`${index === activeIndex && "active"}`}>
                                <img src={image1} alt="" />
                                <div className="info">info {i}</div>
                            </Item>
                        )
                    }
                </Slider>
            </Wrapper>
        </div>
    )
}
export default Horizolsider