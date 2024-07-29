'use client'

import { Pagination } from 'flowbite-react'
import './style.css'

interface PaginationComponentProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange
}: PaginationComponentProps) {
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        nextLabel="Próximo"
        previousLabel="Anterior"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
        className="m-0"
      />
    </div>
  )
}
