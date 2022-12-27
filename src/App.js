import Header from "./components/Header";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideNav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
