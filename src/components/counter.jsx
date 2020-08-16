import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontWeight: "bold",
    fontSize: 30,
  };
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/*  <span style={{fontSize: 30}} className="badge badge-primary m-2">
         */}
        <span style={this.styles} className={this.getBedgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBedgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
    //return count == 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
