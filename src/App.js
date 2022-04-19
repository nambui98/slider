
import Horizolsider from './components/horizolslider/Horizolsider'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      image: "https://images.pexels.com/photos/2573993/pexels-photo-2573993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: [
        "1",
        "2"
      ],
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/5465310/pexels-photo-5465310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: [
        "1",
        "2"
      ],
    }
    , {
      id: 6,
      image: "https://images.pexels.com/photos/2110937/pexels-photo-2110937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
