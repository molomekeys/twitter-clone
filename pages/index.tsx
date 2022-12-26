import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import LoginCard from '../components/LoginCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
    <div className='bg-gray-500 w-screen h-screen flex'>      
      <LoginCard/></div>

    </>
  );
}
