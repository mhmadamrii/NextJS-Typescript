import Head from 'next/head'
import React, { useState, ChangeEvent, useEffect } from 'react'
import axios from 'axios'

// define shape of object when creating props/state

enum HairColor {
  blonde = 'Your hair is blonde, good for you',
  brown = 'Cool hair color',
  pink = "That's so gorgeous",
}
interface Props {
  name?: any
  getName?: () => string
  hairColor?: HairColor
}

const Child: React.FC<Props> = (props) => {
  const url = 'https://reqres.in/api/products'
  console.log("props", props)


  type Name = "pedro" | "jack" 
  const nameForUs: Name = "pedro"


  useEffect(() => {
    axios.get(url).then((res) => console.log(res.data.data))
  }, [])

  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.hairColor}</h2>
    </>
  )
}

const Tutorial: React.FC = () => {
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
        <div style={{ margin: 'auto', width: 500 }}>
          <h1>{country}</h1>
          <Child hairColor={HairColor.blonde} />
          <input placeholder="country..." onChange={handleChange} />
          {HairColor.blonde}
        </div>
      </main>
    </>
  )
}

export default Tutorial
