import React from "react";
import Caroussel from "./Caroussel.jsx";
import Navbar from "./Navbar.jsx";
import Rating from "./Rating.jsx";
import Style from "./Style.jsx";
import axios from "axios";
export default class NameOfTheService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productInfo: {},
      style: [],
      index: 0,
    };
  }

  fetchStyleData() {
    axios.get("/api/style").then((response) => {
      console.log("here", response.data);
      this.setState({ style: response.data });
    });
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
    this.fetchStyleData();
  }
  changeStyle(e) {
    this.setState({ index: e.target.getAttribute("index"), test: true }, () => {
      console.log("index", this.state.index);
    });
  }
  render() {
    console.log("here my state", this.state);
    return (
      <div>
        <div>
          <Navbar />
        </div>

        <div className="thisrating">
          <Rating productInfo={this.state.productInfo} />
          <div>
            <Style
              fetchStyleData={this.fetchStyleData.bind(this)}
              test={this.state.test}
              style={this.state.style}
              changeStyle={this.changeStyle.bind(this)}
            />
          </div>
        </div>

        <div>
          <Caroussel index={this.state.index} style={this.state.style} />
        </div>
      </div>
    );
  }
}
