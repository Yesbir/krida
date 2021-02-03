import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Divider from "./components/Dividers/VerticalDivider";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <div>
      <NavBar onMenuClickHandler={setIsDrawerOpen} />
      <SideBar open={isDrawerOpen} setOpen={setIsDrawerOpen} />
      <div className="ui container body">
        <Divider />
      </div>
    </div>
  );
}

export default App;
