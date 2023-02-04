import React, { Component } from "react";
import "../../styles/HomePage.css";
import NavBar from "../../components/NavBar";
import MainContent from "./MainContent";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <MainContent />
      </div>
    );
  }
}

export default HomePage;
