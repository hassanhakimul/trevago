// import { IconName } from "react-icons/ai";

import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import UpHeader from "./Header/UpHeader";
import Home from "./Home/Home";


function App() {
  return (
    <div className="App">
      <UpHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
