import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { render } from 'react-dom'
import axios from 'axios'

// define shape of object (type data checking)
interface Props {
  name?: string
}

interface Hello {
  name: string
  age: number
}

interface Data {
  id: number
  name: string
}

interface Comments {
  id: number
  name: string
  email: string
}

const ProfileFC: React.FC = () => {
  const [comment, setComment] = useState<Comments[]>([])

  useEffect(() => {
    const handleGet = async (): Promise<void> => {
      const url = 'https://jsonplaceholder.typicode.com/comments?_limit=20'
      try {
        const response = await axios.get(url)
        console.log(response.data)

        if (response.status === 200) {
          setComment(response.data)
        } else {
          console.log('something went wrong')
        }
      } catch (error) {
        console.log(error)
      }
    }

    handleGet()
  }, [])
  return (
    <>
      <div style={{ border: '1px solid red' }}>
        {comment.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h4>{item.email}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

class Profile extends React.Component<Props> {
  static defaultProps = {
    name: 'Jonathan Doe',
  }

  // doesn't return anything
  handleGet = (): void => {
    console.log('Hellow')
  }

  // returns something
  handleGetTwo = (): Hello => {
    return {
      name: 'John',
      age: 30,
    }
  }

  handleGetThree = async (): Promise<Data | undefined> => {
    const url = 'https://jsonplaceholder.typicode.com/comments?_limit=20'
    try {
      const response = await axios.get<Data>(url)
      const json = await response.data
      console.log(json)
      return json
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { name } = this.props
    return (
      <>
        <Head>
          <title>Index | Profile</title>
        </Head>

        <main>
          <h1>Profile page</h1>
          <h1>{name}</h1>
          <button onClick={this.handleGet}>Click</button>
          <button onClick={() => console.log(this.handleGetTwo())}>
            Click
          </button>
          <button onClick={this.handleGetThree}>Try to get</button>
        </main>
      </>
    )
  }
}

class ProfileContainer extends React.Component {
  render() {
    return (
      <>
        <Profile />
        <ProfileFC />
      </>
    )
  }
}

export default ProfileContainer
