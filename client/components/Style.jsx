import axios from "axios";
import React, { Component } from "react";

export class Style extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "BLACK",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState({ name: name });
    this.props.fetchStyleData();
  }
  render() {
    const styles = this.props.style;

    return (
      <div>
        <div id="dotdiv">
          <div>
            <div id="stylething">
              <span id="boldstyle">STYLE </span> {this.state.name}
            </div>
          </div>
          {styles.map((style, index) => {
            return (
              <div
                className="styledot"
                key={index}
                onClick={() => this.handleClick(style.name)}
              >
                <div
                  style={{ backgroundColor: `${style.name}` }}
                  id={style.name}
                  index={index}
                  className="dot"
                  onClick={(e) => {
                    this.props.changeStyle(e);
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <div id="buttondiv">
          <select name="size" id="sizes">
            <option value="1">SELECT SIZE</option>

            {this.props.size.map((elem, i) => (
              <option key={i}>{elem[i].size}</option>
            ))}
          </select>
          <select name="quantity" id="quantities">
            <option value="1" id="textquantity">
              QUANTITY
            </option>
            <option value="1">1</option>

            {this.props.size.map((elem, i) => (
              <option id="textStyle" key={i}>
                {elem[i].quantity}
              </option>
            ))}
          </select>

          <button id="carts" type="button" className="btn btn-light">
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}

export default Style;
