import React, { Component } from "react";
// import Carousel from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import data from "./data.js";
import axios from "axios";
class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentId: 0,
      currenObj: null,
      render: false,
      i: false,
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

    // this.forceUpdate();
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

  render() {
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
                        <div className="carousel-inner">
                          <div
                            className="active item"
                            data-slide-number="0"
                            onClick={(e) => this.clickable(e)}
                          >
                            <img
                              src={
                                this.state.currenObj
                                  ? this.state.currenObj.url
                                  : this.state.data[0].url
                              }
                            />
                            ;
                          </div>
                        </div>

                        <a
                          className="left carousel-control"
                          href="#myCarousel"
                          role="button"
                          data-slide="prev"
                        >
                          <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a
                          className="right carousel-control"
                          href="#myCarousel"
                          role="button"
                          data-slide="next"
                        >
                          <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
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
