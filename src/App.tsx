import * as React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Products />
    </React.Fragment>
  );
};

export default App;
