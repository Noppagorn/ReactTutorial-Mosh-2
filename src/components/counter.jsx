import React, { Component } from "react";
class Counter extends Component {
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
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      )
    );
  }

  getBedgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
    //return count == 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
