import { useState } from 'react'
import Horizolsider from './components/horizolslider/Horizolsider'
import logo from './logo.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from 'styled-components';
import image1 from './assets/images/pexels-daria-shevtsova-1095550.jpg'
import image2 from './assets/images/pexels-ella-olsson-1640777.jpg'
import image3 from './assets/images/pexels-engin-akyurt-1435735.jpg'
import image4 from './assets/images/pexels-lisa-fotios-1279330.jpg'
import image5 from './assets/images/pexels-mariana-kurnyk-1775043.jpg'
import image6 from './assets/images/pexels-tijana-drndarski-3338681.jpg'
function App() {
  const listItem = [
    {
      id: 1,
      image: image1,
      info: [
        "Lorem ipsum dolor sit amet Soluta",
        "consectetur adipisicing elit. ",
        "veritatis tenetur.",
        "veritatis tenetur."
      ],
    },
    {
      id: 2,
      image: image2,
      info: [
        "1",
        "2"
      ],
    },
    {
      id: 3,
      image: image3,
      info: [
        "1",
        "2"
      ],
    },
    {
      id: 4,
      image: image4,
      info: [
        "1",
        "2"
      ],
    },
    {
      id: 5,
      image: image5,
      info: [
        "1",
        "2"
      ],
    }
    , {
      id: 6,
      image: image6,
      info: [
        "1",
        "2"
      ],
    }
  ]
  return (
    <div className="App">
      <Horizolsider listItem={listItem} />
      {/* <ul>

          {

            [...Array(10).keys()].map((i, index) =>
              <li>

                <Item>
                  <img src={image1} alt="" />

                  <div className={`info `}>info
                  </div>
                </Item>
              </li>

            )
          }
        </ul> */}
      {/* </Horizolsider> */}
    </div>
  )
}

export default App
