import Header from '../components/Header'
import Head from 'next/head'
import LeftSide from '../components/LeftSide'
import Login from '../components/Login'
import MainBody from '../components/MainBody'
import RightSide from '../components/RightSide'
import { useSession } from "next-auth/react"



export default function Home() {

  const { data: session } = useSession()
  if(!session) return <Login/>

  return (
    <Header>
      <div className=''>
        <Head>
          <title>Facebook Clone App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex'>
          {/* left side */}
          <LeftSide/>

          {/* main body */}
          <MainBody/>

          {/* right side */}
          <RightSide/>
        </div>
      </div>
    </Header>
  )
}


