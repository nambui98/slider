import { useState } from 'react'
import Horizolsider from './components/horizolslider/Horizolsider'
import logo from './logo.svg'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/images/pexels-daria-shevtsova-1095550.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Horizolsider>
        {

          [...Array(10).keys()].map((i, index) => <div>
            <img src={image1} alt="" />

            <div className={`info `}>info
            </div>
          </div>
          )
        }
      </Horizolsider>
    </div>
  )
}

export default App
