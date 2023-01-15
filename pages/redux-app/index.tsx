import React from 'react'

const Wrapped: React.FC = () => {
  return (
    <>
      <h1>Wrapape</h1>
    </>
  )
}

class ReduxApp extends React.Component {
  render() {
    return (
      <>
        <h1>Redux app</h1>
        <Wrapped />
      </>
    )
  }
}
