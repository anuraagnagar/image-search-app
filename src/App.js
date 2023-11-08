import { useState } from "react";

import "./assets/css/style.css";
import Logo from "./assets/logo.png";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FetchImages from "./utils/FetchImages";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (text) => {
    const response = await FetchImages(text);
    setImages(response);
  };

  return (
    <div style={{ padding: "10px" }}>
      <Navbar logo={Logo} />
      <div className="container">
        <Header submit={handleSubmit} images={images} />
      </div>
    </div>
  );
}

export default App;
