import Head from 'next/head'
import { Inter } from "next/font/google"
import Container from '../components/Container'
import TypingAnimation from '../components/TypingAnimation'
const inter = Inter({ subsets: ['latin'] })
import { useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>

        <div className='max-w-7xl m-auto h-96 justify-center items-center w-full' style={{ backgroundImage: 'url(https://512pixels.net/downloads/macos-wallpapers-thumbs/10-2--thumb.png)', backgroundPosition: "center" }}>
          <TypingAnimation />
        </div>
        {user?.fullName ? user?.fullName.split(" ")[0] + ' ' + user?.fullName.split(" ")[1].charAt(0) : user?.username}
      </Container>
    </>
  )
}
