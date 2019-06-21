import React, { Component } from "react";

export default class Options extends Component {
  render() {
    const [feature, features, selected] = [
      this.props.feature,
      this.props.features,
      this.props.selected
    ];

    const options = features[feature].map((item, index) => {
      const selectedClass =
        item.name === selected[feature].name ? "feature__selected" : "";
      const featureClass = "feature__option " + selectedClass;
      return (
        <li key={index}>
          <div
            className={featureClass}
            onClick={e => this.props.updateFeature(feature, item)}
          >
            {item.name}(
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(item.cost)}
            )
          </div>
        </li>
      );
    });

    return <ul className="feature__item">{options}</ul>;
  }
}
