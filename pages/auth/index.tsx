import React, { Component } from 'react'
import Auth from './Auth'

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
        <Auth />
      </>
    )
  }
}
