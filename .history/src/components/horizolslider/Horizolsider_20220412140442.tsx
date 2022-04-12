import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import image1 from '../../assets/images/pexels-daria-shevtsova-1095550.jpg'
import { Children } from 'react';

type Props = {
    children: any
}
const listItem = [
    {
        id: 1,
        image: image1,
        info: [
            "1",
            "2"
        ],
    },
    {
        id: 2,
        image: image1,
        info: [
            "1",
            "2"
        ],
    },
    {
        id: 3,
        image: image1,
        info: [
            "1",
            "2"
        ],
    },
    {
        id: 4,
        image: image1,
        info: [
            "1",
            "2"
        ],
    },
    {
        id: 5,
        image: image1,
        info: [
            "1",
            "2"
        ],
    }
    , {
        id: 6,
        image: image1,
        info: [
            "1",
            "2"
        ],
    }
]
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
    .info{
        width: 200px;
        border: 2px solid #d5d5d5;
        border-radius: 10px;
        height: 200px;
        transition: transform 1000s;
        visibility: hidden;
        margin-top: 50px;
        margin-left: -30px;
        ul{

            list-style: none;
        }
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
    const [activeIndex2, setActiveIndex2] = useState<number>(0);
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
        beforeChange: (current: any, next: any) => {
            setActiveIndex(next)
        },
    };

    return (
        <div style={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Wrapper>
                <Slider {...settings}>
                    {
                        listItem.map((item, index) =>
                            <Item className={`${index === activeIndex ? "active" : (activeIndex - index) === 1 || (index - activeIndex) === 1 || (index - activeIndex) === 9 || (index - activeIndex) === -9 ? "near" : ""}`}>
                                <img src={item.image} alt="" />

                                <div className={`info ${activeIndex === index && "active"}`}>
                                    <ul>
                                        <p>List item</p>
                                        {
                                            item.info.map(i => <li>
                                                {i}
                                            </li>)
                                        }

                                    </ul>
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