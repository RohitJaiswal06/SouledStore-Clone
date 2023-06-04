import './App.css';
import Navigation from './Components/Navbar/Navigation'
import Slider from "./Components/Carousel/Carousel"
import Collection from './Components/Collectons/Collection';
import Category from './Components/Collectons/Category';
import Merchandise from './Components/Collectons/Merchandise';
import TopSelling from './Components/Collectons/TopSelling';
import Membership from './Components/Collectons/Membership';
function App() {
  return (
    <>
      <Navigation></Navigation>
      <Slider/>
      <Collection/>
      <Category/>
      <Merchandise/>
      <TopSelling/>
      <Membership/>
    </>
  );
}

export default App;
