import React, { useReducer } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax'

interface Props {
  name?: string
}

interface State {
  count: number
  // test: any
}

interface Action {
  type: string
  payload?: any
}

// reducer
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      }
    case 'decrement':
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}

const HomeOne: NextPage<Props> = (props) => {
  const { name } = props
  return <h1>the name is {name}</h1>
}

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <>
      <Head>
        <title>Index | Homepage</title>
      </Head>

      <main>
        <div style={{ padding: 30 }}>
          <h1>Home page</h1>
          <div style={{ width: 600, margin: 'auto' }}>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
              <ParallaxBannerLayer
                image="https://plus.unsplash.com/premium_photo-1669040674572-836c64a3ac70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                speed={-20}
              />
            </ParallaxBanner>

            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
              <ParallaxBannerLayer
                image="https://plus.unsplash.com/premium_photo-1669040674572-836c64a3ac70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                speed={-20}
              />
            </ParallaxBanner>
          </div>

          <div>
            <Parallax translateY={[-20, 10]}>
              <p style={{ border: '1px solid' }}>
                Dolor ea do ipsum sunt anim sunt do. Sit labore reprehenderit
                nostrud aliqua veniam. Proident deserunt eu adipisicing
                incididunt fugiat aute. Exercitation cupidatat laborum dolore
                velit ullamco sit veniam. Esse do quis cillum reprehenderit
                minim ipsum in cupidatat. Labore ad consectetur adipisicing nisi
                labore. Lorem consectetur dolore non cillum est adipisicing
                labore anim culpa dolor deserunt.Reprehenderit cupidatat aute
                cillum qui laboris. Ad ea id labore et commodo. Anim tempor id
                culpa Lorem pariatur eu aliqua aliqua irure non irure irure
                laboris pariatur. Dolor exercitation deserunt officia quis magna
                laboris aute ipsum veniam Lorem. Fugiat aliquip eiusmod amet et
                ex Lorem culpa ut exercitation ad.Excepteur duis mollit commodo
                eiusmod id. Consectetur reprehenderit sit amet ipsum
                exercitation nisi. Sint ut do aliqua nisi minim id ullamco nulla
                laborum deserunt. Lorem proident aliquip labore eu labore irure
                do ex. Voluptate duis cillum labore dolore. Anim incididunt aute
                veniam consectetur est consectetur mollit nisi exercitation
                aliqua minim mollit. Elit aliquip cupidatat in aliquip id mollit
                non dolor minim consectetur non quis anim sint.
              </p>
            </Parallax>

            <center>
              <h1>{state.count}</h1>
              <button onClick={() => dispatch({ type: 'increment' })}>
                increment
              </button>
            </center>
            <h1>Parallax</h1>
            <p>
              Dolor ea do ipsum sunt anim sunt do. Sit labore reprehenderit
              nostrud aliqua veniam. Proident deserunt eu adipisicing incididunt
              fugiat aute. Exercitation cupidatat laborum dolore velit ullamco
              sit veniam. Esse do quis cillum reprehenderit minim ipsum in
              cupidatat. Labore ad consectetur adipisicing nisi labore. Lorem
              consectetur dolore non cillum est adipisicing labore anim culpa
              dolor deserunt.Reprehenderit cupidatat aute cillum qui laboris. Ad
              ea id labore et commodo. Anim tempor id culpa Lorem pariatur eu
              aliqua aliqua irure non irure irure laboris pariatur. Dolor
              exercitation deserunt officia quis magna laboris aute ipsum veniam
              Lorem. Fugiat aliquip eiusmod amet et ex Lorem culpa ut
              exercitation ad.Excepteur duis mollit commodo eiusmod id.
              Consectetur reprehenderit sit amet ipsum exercitation nisi. Sint
              ut do aliqua nisi minim id ullamco nulla laborum deserunt. Lorem
              proident aliquip labore eu labore irure do ex. Voluptate duis
              cillum labore dolore. Anim incididunt aute veniam consectetur est
              consectetur mollit nisi exercitation aliqua minim mollit. Elit
              aliquip cupidatat in aliquip id mollit non dolor minim consectetur
              non quis anim sint.
            </p>
            <p>
              Dolor ea do ipsum sunt anim sunt do. Sit labore reprehenderit
              nostrud aliqua veniam. Proident deserunt eu adipisicing incididunt
              fugiat aute. Exercitation cupidatat laborum dolore velit ullamco
              sit veniam. Esse do quis cillum reprehenderit minim ipsum in
              cupidatat. Labore ad consectetur adipisicing nisi labore. Lorem
              consectetur dolore non cillum est adipisicing labore anim culpa
              dolor deserunt.Reprehenderit cupidatat aute cillum qui laboris. Ad
              ea id labore et commodo. Anim tempor id culpa Lorem pariatur eu
              aliqua aliqua irure non irure irure laboris pariatur. Dolor
              exercitation deserunt officia quis magna laboris aute ipsum veniam
              Lorem. Fugiat aliquip eiusmod amet et ex Lorem culpa ut
              exercitation ad.Excepteur duis mollit commodo eiusmod id.
              Consectetur reprehenderit sit amet ipsum exercitation nisi. Sint
              ut do aliqua nisi minim id ullamco nulla laborum deserunt. Lorem
              proident aliquip labore eu labore irure do ex. Voluptate duis
              cillum labore dolore. Anim incididunt aute veniam consectetur est
              consectetur mollit nisi exercitation aliqua minim mollit. Elit
              aliquip cupidatat in aliquip id mollit non dolor minim consectetur
              non quis anim sint.
            </p>
            <p>
              Dolor ea do ipsum sunt anim sunt do. Sit labore reprehenderit
              nostrud aliqua veniam. Proident deserunt eu adipisicing incididunt
              fugiat aute. Exercitation cupidatat laborum dolore velit ullamco
              sit veniam. Esse do quis cillum reprehenderit minim ipsum in
              cupidatat. Labore ad consectetur adipisicing nisi labore. Lorem
              consectetur dolore non cillum est adipisicing labore anim culpa
              dolor deserunt.Reprehenderit cupidatat aute cillum qui laboris. Ad
              ea id labore et commodo. Anim tempor id culpa Lorem pariatur eu
              aliqua aliqua irure non irure irure laboris pariatur. Dolor
              exercitation deserunt officia quis magna laboris aute ipsum veniam
              Lorem. Fugiat aliquip eiusmod amet et ex Lorem culpa ut
              exercitation ad.Excepteur duis mollit commodo eiusmod id.
              Consectetur reprehenderit sit amet ipsum exercitation nisi. Sint
              ut do aliqua nisi minim id ullamco nulla laborum deserunt. Lorem
              proident aliquip labore eu labore irure do ex. Voluptate duis
              cillum labore dolore. Anim incididunt aute veniam consectetur est
              consectetur mollit nisi exercitation aliqua minim mollit. Elit
              aliquip cupidatat in aliquip id mollit non dolor minim consectetur
              non quis anim sint.
            </p>
          </div>

          <div>
            <Parallax>
              <h1>Hello world</h1>
            </Parallax>
          </div>
        </div>
      </main>
    </>
  )
}

HomeOne.defaultProps = {
  name: 'Jonathan',
}

export default Home
