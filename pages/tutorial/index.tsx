import Head from 'next/head'
import React, { useState, ChangeEvent } from 'react'
import { createNoSubstitutionTemplateLiteral } from 'typescript'

interface Props {
  name?: any
  getName: () => string
}

interface State {}

const Child: React.FC<Props> = (props) => {
  // console.log('child', props)
  // console.log(props.getName())
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Tutorial: React.FC<Props> = (props) => {
  const name: string = 'pedro'

  const getName = (): string => {
    return 'hello'
  }

  const [country, setCountry] = useState<string | null>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  console.log(country)

  return (
    <>
      <Head>
        <title>{country}</title>
      </Head>

      <main>
        <h1>{country}</h1>
        <Child name={name} getName={getName} />
        <input placeholder="country..." onChange={handleChange} />
      </main>
    </>
  )
}

export default Tutorial
