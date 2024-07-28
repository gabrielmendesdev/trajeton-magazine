import React, { useState } from 'react'
import { usePedido } from '../context/PedidoContext'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react'
import { PaginationComponent } from './Pagination' // Importe o componente de paginação

const ITEMS_PER_PAGE = 5

export const WishList: React.FC = (): React.ReactNode => {
  const { pedidos } = usePedido()
  const [currentPage, setCurrentPage] = useState(1)

  // Número total de páginas
  const totalPages = Math.ceil(pedidos.length / ITEMS_PER_PAGE)

  // Calcular índices dos pedidos a serem exibidos
  const indexOfLastPedido = currentPage * ITEMS_PER_PAGE
  const indexOfFirstPedido = indexOfLastPedido - ITEMS_PER_PAGE
  const currentPedidos = pedidos.slice(indexOfFirstPedido, indexOfLastPedido)

  const onPageChange = (page: number) => setCurrentPage(page)

  return (
    <div className="flex flex-col overflow-x-auto">
      <Table>
        <TableHead className="text-center">
          <TableHeadCell>Núm. Pedido</TableHeadCell>
          <TableHeadCell>Valor</TableHeadCell>
          <TableHeadCell>Data</TableHeadCell>
          <TableHeadCell>Forma de pagamento</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Ação</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y text-center">
          {currentPedidos.map((pedido) => (
            <TableRow
              key={pedido.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="text-blue-500">{pedido.id}</TableCell>
              <TableCell>${pedido.value.toFixed(2)}</TableCell>
              <TableCell>
                {new Date(pedido.date).toLocaleDateString()}
              </TableCell>
              <TableCell>{pedido.formOfPayment}</TableCell>
              <TableCell>{pedido.status}</TableCell>
              <TableCell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Editar
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  )
}
