import { useState } from "react";
import "./home.module.css";
import Banner from "../Banner/banner";
import Catalog from "../Catalog/catalog";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Banner />
      <Catalog />
    </div>
  );
}

export default Home;
