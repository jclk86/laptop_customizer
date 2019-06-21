import React, { Component } from "react";
import Option from "./Option";

export default class Feature extends Component {
  render() {
    const features = Object.keys(this.props.features).map(feature => {
      return (
        <div className="feature" key={feature}>
          <div className="feature__name">{feature}</div>
          <Option
            selected={this.props.selected}
            feature={feature}
            updateFeature={this.props.updateFeature}
            features={this.props.features}
            className="feature__list"
          />
        </div>
      );
    });

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    );
  }
}
