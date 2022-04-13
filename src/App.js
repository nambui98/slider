
import Horizolsider from './components/horizolslider/Horizolsider'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from './assets/images/pexels-daria-shevtsova-1095550.webp'
import image2 from './assets/images/pexels-ella-olsson-1640777.webp'
import image3 from './assets/images/pexels-engin-akyurt-1435735.webp'
import image4 from './assets/images/pexels-lisa-fotios-1279330.webp'
import image5 from './assets/images/pexels-mariana-kurnyk-1775043.webp'
import image6 from './assets/images/pexels-tijana-drndarski-3338681.webp'
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
    </div>
  );
}

export default App;
