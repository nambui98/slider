import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick";


import { BiBasket, BiMinus, BiPlus } from "react-icons/bi";
type Props = {
    listItem: any[]
}

const Wrapper = styled.div`
    width: 700px;
    @media only screen and (max-width: 700) {
        width: 100%;
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
    }
    .info{
        width: 200px;
        border: 2px solid #d5d5d5;
        border-radius: 10px;
        transition: transform 1000s;
        visibility: hidden;
        margin-top: 50px;
        margin-left: -30px;

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
            }
        }
    }
    &.active{
        margin-top: 30px;
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
        img{
            transform: scale(1.15)
        }
        

    }
`
const Horizolsider = (props: Props) => {
    const { listItem } = props;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [showInfo, setShowInfo] = useState<boolean>(false);
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
            if (current !== next) {
                setShowInfo(false)
            }
        },
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                {
                    props.listItem.map((item, index) =>
                        <Item className={`${index === activeIndex ? "active" : (activeIndex - index) === 1 || (index - activeIndex) === 1 || (index - activeIndex) + 1 === listItem.length || (index - activeIndex) === -(listItem.length - 1) ? "near" : ""}`}>
                            <img src={item.image} alt="" />

                            <div className={`info ${activeIndex === index && "active"}`}>
                                <div className='info__title' onClick={() => {
                                    setShowInfo(!showInfo)
                                    debugger
                                }}>{showInfo ? <BiMinus /> : <BiPlus />} List item</div>
                                {
                                    showInfo ?
                                        <ul>
                                            {
                                                item.info.map((i: any) => <li>
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