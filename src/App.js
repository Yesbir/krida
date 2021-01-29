import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <div>
      <NavBar onMenuClickHandler={setIsDrawerOpen} />
      <SideBar open={isDrawerOpen} setOpen={setIsDrawerOpen} />
      <div className="ui container body"></div>
    </div>
  );
}

export default App;
