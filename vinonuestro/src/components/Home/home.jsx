import { useState } from "react";
import "./home.module.css";
import Banner from "../Banner/banner";
import Explore from "../Explore/explore";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Banner />
      <Explore />
    </div>
  );
}

export default Home;
