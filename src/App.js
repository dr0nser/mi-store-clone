import './App.css';
import PreNavBar from './components/PreNavBar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json"
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';


function App() {
  return (
    <Router>
      <PreNavBar />
      <Navbar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifestyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Route exact path="/music">
        <HotAccessories menuItem={data.hotAccessories.music} menuItemCover={data.hotAccessoriesCover.music} />
      </Route>
      <Route exact path="/smartDevices">
        <HotAccessories menuItem={data.hotAccessories.smartDevice} menuItemCover={data.hotAccessoriesCover.smartDevice} />
      </Route>
      <Route exact path="/home">
        <HotAccessories menuItem={data.hotAccessories.home} menuItemCover={data.hotAccessoriesCover.home} />
      </Route>
      <Route exact path="/lifestyle">
        <HotAccessories menuItem={data.hotAccessories.lifeStyle} menuItemCover={data.hotAccessoriesCover.lifeStyle} />
      </Route>
      <Route exact path="/mobileAccessories">
        <HotAccessories menuItem={data.hotAccessories.mobileAccessories} menuItemCover={data.hotAccessoriesCover.mobileAccessories} />
      </Route>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
