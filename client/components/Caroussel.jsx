import React, { Component } from "react";
// import Carousel from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import data from "./data.js";
import axios from "axios";
import WZoom from "../../src/wheel-zoom.js";
class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentId: 0,
      currenObj: null,
      render: false,
      counter: 0,
      isZoomed: false,
    };
    this.clickable = this.clickable.bind(this);
    this.fetchPictures = this.fetchPictures.bind(this);
  }

  //function to fetch the pictures url
  fetchPictures() {
    axios.get("/api/overview").then((response) => {
      console.log("fetching", response);
      this.setState({ data: response.data, render: true });
      console.log(this.state.data);
      console.log(this.state.currenObj);
      console.log("heeeeere", this.state.data[0].thumbnail_url);
    });
  }

  componentDidMount() {
    this.fetchPictures();
  }

  myf() {
    this.setState({
      currentId: this.state.currentId,
    });
    console.log("==>");
  }

  clickable(e) {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({
      currenObj: this.state.data[e.target.id],
    });
    // this.forceUpdate();
  }

  arrowRightClick() {
    this.state.counter !== this.state.data.length
      ? this.setState({
          counter: this.state.counter + 1,
          currenObj: this.state.data[this.state.counter + 1],
          render: true,
        })
      : this.setState({
          counter: this.state.counter,
          currenObj: this.state.data[this.state.counter],
          render: true,
        });
  }

  arrowLeftClick() {
    this.state.counter !== 0
      ? this.setState({
          counter: this.state.counter - 1,
          currenObj: this.state.data[this.state.counter - 1],
        })
      : this.setState({
          counter: this.state.data.length,
          currenObj: this.state.data[this.state.counter],
        });
  }
  zoomIn() {
    this.setState({ isZoomed: true });
  }

  render() {
    WZoom.create("#myContent", {
      type: "html",
      width: 1000,
      height: 500,
    });
    return (
      <div id="this" className="container">
        {this.state.render ? (
          <div id="main_area" className="bigbox">
            <div className="row">
              <div className="col-sm-3" id="slider-thumbs">
                <ul className="hide-bullets">
                  {this.state.data.map((obj, i) => (
                    <li
                      className="col-sm-12"
                      onClick={(e) => this.clickable(e)}
                      key={i}
                    >
                      <a className="thumbnail" id="carousel-selector-0">
                        <img src={obj.thumbnail_url} id={i} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-8">
                <div className="col-xs-12" id="slider">
                  <div className="row">
                    <div
                      className="col-sm-12"
                      id="carousel-bounding-box"
                      id="boxes"
                    >
                      <div className="carousel slide" id="myCarousel">
                        <div>
                          <div className="carousel-inner">
                            <div
                              className="active item"
                              data-slide-number="0"
                              // onClick={(e) => this.clickable(e)}
                            >
                              <div id="myWindow">
                                <img
                                  // style={{ width: "400px", height: "600px" }}
                                  id="myContent"
                                  // id={this.state.currentId}
                                  src={
                                    this.state.currenObj
                                      ? this.state.currenObj.url
                                      : this.state.data[0].url
                                  }
                                  onClick={this.zoomIn.bind(this)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {this.state.counter !== 0 && this.state.render ? (
                          <a
                            className="left carousel-control"
                            href="#myCarousel"
                            role="button"
                            data-slide="prev"
                            onClick={this.arrowLeftClick.bind(this)}
                          >
                            <span className="glyphicon glyphicon-chevron-left"></span>
                          </a>
                        ) : null}
                        {this.state.counter !== this.state.data.length - 1 &&
                        this.state.render ? (
                          <a
                            className="right carousel-control"
                            href="#myCarousel"
                            role="button"
                            data-slide="next"
                            onClick={this.arrowRightClick.bind(this)}
                          >
                            <span className="glyphicon glyphicon-chevron-right"></span>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Caroussel;
