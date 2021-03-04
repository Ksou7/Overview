import React, { Component } from "react";
// import Carousel from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import data from "./data.js";
import axios from "axios";
import { uuid } from "uuidv4";

class Caroussel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentId: 0,
      currenObj: false,
      render: false,
      counter: 0,
      isZoomed: false,
    };
    this.clickable = this.clickable.bind(this);
    // this.fetchPictures = this.fetchPictures.bind(this);
  }

  //function to fetch the pictures url
  // fetchPictures() {
  //   axios.get("/api/overview").then((response) => {
  //     console.log("fetching", response);
  //     this.setState({ data: response.data }, console.log(this.state.data));
  //   });
  // }

  componentDidMount() {
    
    
        axios.get("/api/overview").then((res)=>{
        this.setState({
          data: res.data,
          
        })
      
      })
     
     
  }

  clickable(e) {
    e.preventDefault();
    console.log(e.target.id);

    this.setState({
      currenObj: this.props.style[e.target.id].photos[this.props.index],
    });
  }

  arrowRightClick() {
    console.log(
      this.props.style[this.props.index].photos[this.state.counter + 1]
    );

    this.state.counter !== this.props.style.length
      ? this.setState({
          counter: this.state.counter + 1,
          currenObj: this.props.style[this.props.index].photos[
            this.state.counter + 1
          ],
          render: true,
        })
      : this.setState({
          counter: this.state.counter,
          currenObj: this.props.style[this.props.index].photos[
            this.state.counter
          ],
          render: true,
        });
  }

  arrowLeftClick() {
    this.state.counter !== 0
      ? this.setState({
          counter: this.state.counter - 1,
          currenObj: this.props.style[this.props.index].photos[
            this.state.counter - 1
          ],
        })
      : this.setState({
          counter: this.props.style[this.props.index].photos.length,
          currenObj: this.props.style[this.props.index].photos[
            this.state.counter
          ],
        });
  }
  zoomIn() {
    this.setState({ isZoomed: true });
  }

  render() {
    console.log('ff',this.state.data)
        return (
      <div id="this" className="container">
     
        <div id="main_area" className="bigbox">
          <div className="row">
            <div className="col-sm-3" id="slider-thumbs">
              <ul className="hide-bullets">
                {this.state.data.map((obj, i) => (
                  <li
                    className="col-sm-12"
                    onClick={(e) => this.clickable(e)}
                    key={uuid()}
                  >
                    <a className="thumbnail" id="carousel-selector-0">
                      <img
                        src={obj.thumbnail_url}
                        id={i}
                      />
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
                          <div className="active item" data-slide-number="0">
                            {this.state.currenObj && (
                              <img
                                src={this.state.currenObj.url}
                                onClick={this.zoomIn.bind(this)}
                              />
                            )}
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
                      {this.state.counter !== this.props.style.length - 1 &&
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
     
      </div>
    );
  }
}

export default Caroussel;
