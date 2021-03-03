import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export class Rating extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <StarRatings
            rating={3}
            starRatedColor="rgb(80, 80, 80)"
            starDimension="15px"
            starSpacing="1px"
            numberOfStars={5}
            name="rating"
          />
          <div id="mylink">
            <a id="link" href="" target="_blank">
              Read all reviews
            </a>
          </div>
        </div>
        <div id="mainbox">
          <div id="productDetails">
            <div id="category">{this.props.productInfo.category}</div>
            <div id="name">{this.props.productInfo.name}</div>
            <div id="price">${this.props.productInfo.default_price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rating;
