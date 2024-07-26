'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  const logout = () => {
    // Remove o cookie 'auth_token'
    Cookies.remove('auth_token')
    router.push('/login')
  }

  return (
    <div>
      <p>HOMEPAGE</p>
      <button onClick={logout} className="bg-red-500">
        Logout
      </button>
    </div>
  )
}

export default Home
