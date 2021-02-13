import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import HomeContainer from "./components/Containers/HomeContainer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <div>
      <BrowserRouter>
        <NavBar onMenuClickHandler={setIsDrawerOpen} />
        <SideBar open={isDrawerOpen} setOpen={setIsDrawerOpen} />
        <Route path="/" component={HomeContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
