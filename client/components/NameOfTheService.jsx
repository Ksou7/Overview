import React from "react";
import Caroussel from "./Caroussel.jsx";
import Navbar from "./Navbar.jsx";

export default class NameOfTheService extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    console.log("service mounted");
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Caroussel />
        </div>
      </div>
    );
  }
}
