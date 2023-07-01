import React, { Component } from "react";

export class PersonCard extends Component {
  render() {
    return <fieldset>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.props.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        </fieldset>;
  }
}

export default PersonCard;
