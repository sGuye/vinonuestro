import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import  Styles  from "./App.module.css";
import Header from "./components/header/header";
import Home from "./components/Home/home";
import AboutYou from "./components/AboutYou/aboutYou";
import ForYou from "./components/ForYou/forYou";
import Detail from "./components/Detail/detail";
import Favorites from "./components/Favorites/favorites";
import Checkout from "./components/CheckOut/checkout";
import Profile from "./components/Profile/profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={Styles.appContainer}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/Aboutyou" element={<AboutYou />} />
         <Route exact path="/detail" element={<Detail />} />
         <Route exact path="/foryou" element={<ForYou />} />
         <Route exact path="/profile" element={<Profile />} />
         <Route exact path="/checkout" element={<Checkout />} />
         <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
