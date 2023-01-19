import React, { Component } from 'react'
import Auth from './Auth'
import Strange from "./Strange";

interface Props {
  name?: string
}

interface State {
  name?: string
}

export default class Authentication extends Component<Props> {
  render() {
    return (
      <>
        <Strange />
        <Auth />
      </>
    )
  }
}
