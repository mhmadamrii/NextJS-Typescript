import { Component, ReactNode } from "react";
import Authentication from "./auth";

export default class Root extends Component {
  render(): ReactNode {
    return (
      <Authentication />
    )
  }
}