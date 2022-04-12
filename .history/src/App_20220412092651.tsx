import { useState } from 'react'
import Horizolsider from './components/horizolslider/Horizolsider'
import logo from './logo.svg'
import './App.css'
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Horizolsider />
    </div>
  )
}

export default App
