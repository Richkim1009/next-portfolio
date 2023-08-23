import Body from '@/views/body/Body'
import Header from '@/views/header/Header'
import { Container } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <div>
          <Container maxWidth='xl'>
            <Header/>
            <Body />
          </Container>
        </div>
      </main>
    </>
  )
}
