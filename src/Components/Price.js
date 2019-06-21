import React, { Component } from "react";

export default class Price extends Component {
  render() {
    const selected = this.props.selected;
    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );
    return (
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(total)}
        </div>
      </div>
    );
  }
}
