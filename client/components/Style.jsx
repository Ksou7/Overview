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
      <div id="dotdiv">
        <div>
          <div id="stylething">
            <span id="boldstyle">STYLE ></span> {this.state.name}
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
    );
  }
}

export default Style;
