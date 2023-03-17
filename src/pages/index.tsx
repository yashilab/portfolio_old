import { Heading } from '@chakra-ui/react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Yashi Lab</title>
      </Head>
      {/* TODO: 後で変更する */}
      <Heading fontSize='4xl'>Yashi Lab</Heading>
    </>
  )
}

export default Home
