'use client'

import Image from 'next/image'
import TrajetonImage from '../assets/trajeton.svg'
import Text from '../components/Text'

export default function EmailRecoverPassword() {
  return (
    <>
      <nav className="bg-slate-300">
        <Image
          src={TrajetonImage}
          className="h-20 m-auto"
          alt="Trajeton Logo"
        />
      </nav>
      <div className="max-w-sm p-10 m-auto mt-10 border-2 border-black">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-6">
          Olá
        </h5>
        <Text className="font-normal text-gray-700 dark:text-gray-400 my-6">
          Redefina sua senha de acesso clicando no link abaixo.
        </Text>
        <a
          href="/change-password"
          className="text-blue-500 hover:text-blue-700 mt-6"
        >
          https://trajetonbdfqfqw4215fwqfwq.senha
        </a>
        <Text className="text-red-600 mt-6">O link expira em 24 horas</Text>
      </div>
    </>
  )
}
