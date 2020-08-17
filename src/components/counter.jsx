import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [], //["tag1", "tag2", "tag3"],
  };

  styles = {
    fontWeight: "bold",
    fontSize: 30,
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tage!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //***********************
  // true && "HI" will be print HI
  // true && "HI" && 1 will be print 1

  // constructor() {
  //   super();
  //   console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      // <React.Fragment>
      {
        /* <img src={this.state.imageUrl} alt="" /> */
      },
      {
        /*  <span style={{fontSize: 30}} className="badge badge-primary m-2">
         */
      },
      {
        /* <span style={this.styles} className={this.getBedgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button> */
      },
      (
        <div>
          {/* <div>
            {this.state.tags.length === 0 && "Please create a new tag"}
            {this.renderTags()}
          </div> */}
          {this.props.children}
          <span className={this.getBedgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.handleIncrement({ id: 1 })}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
        </div>
      )
    );
  }

  getBedgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value == 0 ? "Zero" : value;
    //return count == 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
