import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";


import { BiMinus, BiPlus } from "react-icons/bi";

const Wrapper = styled.div`
    width: 700px;
    @media only screen and (max-width: 700px) {
        width: 100vw;
    }
`
const Item = styled.div`
    margin-top: 50px;
    transition: all .3s;
    position: relative;
    cursor: pointer;
    img{
        object-fit: cover;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        transition: all .3s;
        @media only screen and (max-width: 700px) {
            width:  70px;
            height: 70px;
        }
    }
    .info{
        /* width: 200px; */
        border: 2px solid #d5d5d5;
        border-radius: 10px;
        transition: transform 1000s;
        visibility: hidden;
        margin-top: 50px;
        margin-left: -30px;
        margin-right: -30px;
        /* position: absolute; */
        /* width: 100%; */
            /* top: 100%; */
            right: 0;
            top: 10px;
            z-index: 10;
        @media only screen and (max-width: 700px) {
            margin:20px -25px 0 -25px;
        }
        ul{
            list-style: none;
            max-height: 150px;
            overflow-y: auto;

            p{
                padding: 10px;
            }
            li{
                padding: 10px;
                border-bottom: 1px solid #d5d5d5;             
            }
        }
        &__title{
            cursor: pointer;
            display: flex;
            text-align: center;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #d5d5d5;
            svg{
                margin-right: 50px;
                @media only screen and (max-width: 700px) {
                     margin-right: 15px;
                }
            }
        }
    }
    &.active{
        margin-top: 30px;
        @media only screen and (max-width: 700px) {
            margin-top: 40px;
        }
        img{
            transform: scale(1.4)
        }
        .info{
            visibility: visible;
            transform: translateY(0px);  
        }
    }
    &.near{
        margin-top: 40px;
        @media only screen and (max-width: 700px) {
            margin-top: 45px;
        }
        img{
            transform: scale(1.15)
        }
        

    }
`
const Horizolsider = (props) => {
    const { listItem } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        beforeChange: (current, next) => {
            setActiveIndex(next)
            if (current !== next) {
                setShowInfo(false)
            }
        },
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    };

    return (
        <Wrapper>
            <Slider  {...settings}>
                {
                    props.listItem.map((item, index) =>
                        <Item className={`${index === activeIndex ? "active" : (activeIndex - index) === 1 || (index - activeIndex) === 1 || (index - activeIndex) + 1 === listItem.length || (index - activeIndex) === -(listItem.length - 1) ? "near" : ""}`}>
                            <img src={"https://resources.stuff.co.nz/content/dam/images/4/y/m/4/c/l/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8nm.120x1p.png/content/dam/images/4/y/m/4/c/l/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8nm.png/1599551600198.jpg"} alt="" />

                            <div className={`info ${activeIndex === index && "active"}`}>
                                <div className='info__title' onClick={() => {
                                    setShowInfo(!showInfo)
                                }}>
                                    {showInfo ? <BiMinus /> : <BiPlus />}
                                    List item</div>
                                {
                                    showInfo ?
                                        <ul>
                                            {
                                                item.info.map((i) => <li>
                                                    {i}
                                                </li>)
                                            }

                                        </ul>
                                        : ""
                                }
                            </div>
                        </Item>
                    )
                }
            </Slider>
        </Wrapper>
    )
}
export default Horizolsider