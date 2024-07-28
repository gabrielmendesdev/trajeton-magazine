'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { SideBar } from './components/SideBar'
import { NavBar } from './components/NavBar'
import { Card } from './components/Card'
import {
  ArchiveBoxArrowDownIcon,
  ListBulletIcon,
  ShoppingBagIcon
} from '@heroicons/react/16/solid'

const Home = () => {
  const router = useRouter()

  const logout = () => {
    // Remove o cookie 'auth_token'
    Cookies.remove('auth_token')
    router.push('/login')
  }

  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <NavBar />
        <div className="grid gap-4 grid-flow-row-dense grid-cols-1 md:grid-cols-3 m-10">
          <Card
            icon={<ShoppingBagIcon width={70} className="text-orange-500" />}
            title="Pedido"
            onClick={() => router.push('/pedido')}
          />
          <Card
            icon={
              <ArchiveBoxArrowDownIcon width={70} className="text-green-400" />
            }
            title="Estoque"
            onClick={() => router.push('/estoque')}
          />
          <Card
            icon={<ListBulletIcon width={70} className="text-yellow-500" />}
            title="Lista Escolar"
            onClick={() => router.push('lista-escolar')}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
