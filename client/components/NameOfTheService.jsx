import React from "react";
import Caroussel from "./Caroussel.jsx";
import Navbar from "./Navbar.jsx";
import Rating from "./Rating.jsx";
import axios from "axios";
export default class NameOfTheService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: {},
    };
  }

  componentDidMount() {
    console.log("heeeeere");
    axios
      .get("/api/overview/product")
      .then((response) => {
        this.setState({ productInfo: response.data });
        console.log("heeeere", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>

        <div className="thisrating">
          <Rating productInfo={this.state.productInfo} />
        </div>
        <div>
          <Caroussel />
        </div>
      </div>
    );
  }
}
