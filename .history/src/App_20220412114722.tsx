import { useState } from 'react'
import Horizolsider from './components/horizolslider/Horizolsider'
import logo from './logo.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './assets/images/pexels-daria-shevtsova-1095550.jpg'
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)
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
  return (
    <div className="App">
      <ul>
        <Horizolsider>

          {

            [...Array(10).keys()].map((i, index) => <li>
              <Item>
                <img src={image1} alt="" />

                <div className={`info `}>info
                </div>
              </Item>
            </li>
            )
          }
        </Horizolsider>
      </ul>
    </div>
  )
}

export default App
