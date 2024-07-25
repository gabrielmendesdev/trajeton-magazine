'use client'

import { Form } from './form'
import TrajetonBanner from '../assets/trajeton.svg'
import TrajetonBannerMobile from '../assets/trajeton-mobile.svg'
import Image from 'next/image'
import './style.css'
import { useEffect, useState } from 'react'

export default function Login() {
  const [isMobile, setIsMobile] = useState(false)

  //Verifica o tamanho atual da viewport para adaptar alguns estilos e imagens baseado na sua largura
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-dvw h-dvh grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center order-2 md:order-1 mb-auto md:mb-0">
        <Form />
      </div>
      <div
        className={`flex items-center justify-center order-1 md:order-2 ${isMobile ? 'bg-white' : 'banner-background'}`}
      >
        <Image
          src={isMobile ? TrajetonBannerMobile : TrajetonBanner}
          alt=""
          className="banner"
        />
      </div>
    </div>
  )
}
