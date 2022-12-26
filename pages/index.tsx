import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import LoginCard from '../components/LoginCard'
import {app,auth,signInWithGoogle} from '../utils/firebase';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with google </button>
    <div className='bg-gray-100 w-screen h-screen flex'>      
      <LoginCard/></div>

    </>
  );
}
