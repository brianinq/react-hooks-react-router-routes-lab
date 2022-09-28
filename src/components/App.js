import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/movies"} exact element={<Movies />} />
        <Route path={"/directors"} exact element={<Directors />} />
        <Route path={"/actors"} exact element={<Actors />} />
      </Routes>
    </div>
  );
}

export default App;
