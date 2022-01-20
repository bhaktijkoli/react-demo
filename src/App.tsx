import * as React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
    </React.Fragment>
  );
};

export default App;
