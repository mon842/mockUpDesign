import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navigation/Navbar'
import Dashboard from '@/components/dashboard/Dashboard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
    </div>
  )
}
