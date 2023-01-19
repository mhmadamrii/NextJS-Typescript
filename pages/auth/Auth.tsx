import Head from 'next/head'
import styles from './styles'

const Auth: React.FC = () => {
  // console.log(window.innerWidth)
  return (
    <>
      <Head>
        <title>Authencication | index</title>
      </Head>

      <main>
        <div style={styles.container}>
          <div style={styles.centeredMain}>
            <h1>Auth</h1>
            <a href="/tutorial">tutorial</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Auth
