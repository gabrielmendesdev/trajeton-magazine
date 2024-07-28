'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { SideBar } from './components/SideBar'
import { NavBar } from './components/NavBar'

const Home = () => {
  const router = useRouter()

  const logout = () => {
    // Remove o cookie 'auth_token'
    Cookies.remove('auth_token')
    router.push('/login')
  }

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />
      </div>
    </div>
  )
}

export default Home
