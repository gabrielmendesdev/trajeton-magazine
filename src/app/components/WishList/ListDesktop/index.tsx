import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react'
import { TrashIcon } from '@heroicons/react/16/solid'
import { formatDate } from '@/app/utils/formatDate'
import { tableHeaders } from '@/app/utils/tableHeaders'

interface ListDesktopProps {
  pedidos: any[]
  handleOpenModal: (id: number) => void
}

export const ListDesktop: React.FC<ListDesktopProps> = ({
  pedidos,
  handleOpenModal
}) => {
  return (
    <Table className="hidden lg:table">
      <TableHead className="text-center hidden lg:table-header-group">
        {tableHeaders.map((header, index) => (
          <TableHeadCell key={index}>{header}</TableHeadCell>
        ))}
      </TableHead>
      <TableBody className="divide-y text-center">
        {pedidos.map((pedido) => (
          <TableRow
            key={pedido.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800 font-medium text-gray-900"
          >
            <TableCell className="text-blue-500">{pedido.id}</TableCell>
            <TableCell>${pedido.value.toFixed(2)}</TableCell>
            <TableCell>
              {pedido.date
                ? new Date(formatDate(pedido.date)).toLocaleDateString()
                : '-'}
            </TableCell>
            <TableCell>{pedido.formOfPayment}</TableCell>
            <TableCell>{pedido.status}</TableCell>
            <TableCell>
              {pedido.status === 'Entregue' ? (
                <button
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 p-3"
                  onClick={() => handleOpenModal(pedido.id)}
                >
                  <TrashIcon className="text-gray-800 w-4 m-auto" />
                </button>
              ) : (
                '-'
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
