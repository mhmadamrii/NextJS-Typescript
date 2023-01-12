import React, { useRef } from 'react'

type Props = {
  name: string
}

type State = {
  count: number
}

const About: React.FC = () => {

  const lastParagraph = useRef<HTMLParagraphElement | null>(null)
  const handleScrollTo = () => {
    console.log(lastParagraph.current)
    if(lastParagraph.current) {
      lastParagraph.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={handleScrollTo}>click scroll</button>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <div ref={lastParagraph}>
        <h1>Divide here</h1>
      </div>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
      <p>
        Aliquip exercitation in commodo ullamco duis sunt duis tempor. Ipsum
        pariatur reprehenderit nostrud veniam amet Lorem nulla mollit
        exercitation. Pariatur nulla eiusmod ad ipsum enim reprehenderit qui.
        Cillum occaecat quis laborum nisi sint eu eiusmod ea. Cupidatat proident
        ex anim irure laboris occaecat nostrud nulla. Exercitation sint irure
        reprehenderit ipsum dolore dolore sint sint pariatur non consectetur
        ipsum aute amet. Deserunt fugiat eiusmod culpa id non magna.
      </p>
    </div>
  )
}

class AboutOne extends React.Component<{}, State> {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>Current count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </div>
    )
  }
}

class AboutContainer extends React.Component<Props> {
  render() {
    return (
      <>
        <div
          style={{
            border: '1px solid red',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <About />
          <AboutOne />
        </div>
      </>
    )
  }
}

export default AboutContainer
