import React from 'react'

interface Props {
  name: string
}

const Navbar: React.FC<Props> = (props) => {
  const { name } = props

  return (
    <>
      <div>
        <h1>Cek</h1>
      </div>
    </>
  )
}

Navbar.defaultProps = {
  name: 'Jonathan',
}

export default Navbar
