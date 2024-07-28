'use client'

import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import { Filter } from './Filter'
import Text from './Text'

export function NavBar() {
  return (
    <Navbar fluid rounded className="bg-blue-900">
      <div className="w-full grid grid-cols-5 items-center">
        <div className="col-span-4">
          <Filter />
        </div>
        <div className="flex justify-end col-span-1 items-center gap-2">
          <Text className="text-white">Usuário Admin</Text>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  )
}
