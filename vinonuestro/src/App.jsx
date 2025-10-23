import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/Home/home";
import AboutYou from "./components/AboutYou/aboutYou";
import ForYou from "./components/ForYou/forYou";
import Detail from "./components/Detail/detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/Aboutyou" element={<AboutYou />} />
         <Route exact path="/detail" element={<Detail />} />
         <Route exact path="/foryou" element={<ForYou />} />
      </Routes>
    </div>
  );
}

export default App;
