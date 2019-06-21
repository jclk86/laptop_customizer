import React, { Component } from "react";
import Price from "./Price";

export default class Summary extends Component {
  render() {
    const selected = this.props.selected;
    const summary = Object.keys(selected).map(key => (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key} </div>
        <div className="summary__option__value">{selected[key].name}</div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(selected[key].cost)}
        </div>
      </div>
    ));

    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <Price selected={selected} />
      </section>
    );
  }
}
