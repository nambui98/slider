
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
      image: "https://resources.stuff.co.nz/content/dam/images/4/y/m/4/c/l/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8nm.120x1p.png/content/dam/images/4/y/m/4/c/l/image.related.StuffThumbnailSixteenByNine.1600x900.4yo8nm.png/1599551600198.jpg",
      info: [
        "Lorem ipsum dolor sit amet Soluta",
        "consectetur adipisicing elit. ",
        "veritatis tenetur.",
        "veritatis tenetur."
      ],
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/10013248/pexels-photo-10013248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: [
        "1",
        "2"
      ],
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/10352102/pexels-photo-10352102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
