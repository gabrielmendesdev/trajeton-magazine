'use client'

import { Sidebar } from 'flowbite-react'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards
} from 'react-icons/hi'
import TrajetonLogo from '../assets/trajeton-logo.svg'
import Image from 'next/image'

export function SideBar() {
  return (
    <Sidebar aria-label="Sidebar" className="h-dvh w-max hidden md:block">
      <Image src={TrajetonLogo} width={80} alt="Trajeton Logo" />
      <Sidebar.Items>
        <Sidebar.ItemGroup className="sidebar-item-no-text">
          <Sidebar.Item href="#" icon={HiChartPie}></Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}></Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}></Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}></Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}></Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}></Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}></Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
