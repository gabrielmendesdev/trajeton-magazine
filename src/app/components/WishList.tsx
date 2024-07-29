import React, { useState, useEffect } from 'react'
import { usePedido } from '../context/PedidoContext'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react'
import { PaginationComponent } from './Pagination'
import { TrashIcon } from '@heroicons/react/16/solid'
import axios from 'axios'
import { formatDate } from '../utils/formatDate'
import { tableHeaders } from '../utils/tableHeaders'

const itemsPerPage = 5

export const WishList: React.FC = (): React.ReactNode => {
  const { pedidos, setPedidos } = usePedido() // Assumindo que usePedido fornece setPedidos
  const [currentPage, setCurrentPage] = useState(1)

  // Atualiza a lista de pedidos
  const fetchPedidos = async () => {
    try {
      const response = await axios.get('http://localhost:5245/api/pedido')
      setPedidos(response.data.dados)
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error)
    }
  }

  // Número total de páginas
  const totalPages = Math.ceil(pedidos.length / itemsPerPage)

  // Calcular índices dos pedidos a serem exibidos
  const indexOfLastPedido = currentPage * itemsPerPage
  const indexOfFirstPedido = indexOfLastPedido - itemsPerPage
  const currentPedidos = pedidos.slice(indexOfFirstPedido, indexOfLastPedido)

  const onPageChange = (page: number) => setCurrentPage(page)

  const handleInativarPedido = async (id: number) => {
    try {
      await axios.put(`http://localhost:5245/api/pedido/${id}`)
      // Atualiza a lista de pedidos após a atualização
      fetchPedidos()
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error)
    }
  }

  return (
    <div className="flex flex-col overflow-x-auto">
      <Table>
        <TableHead className="text-center">
          {tableHeaders.map((header, index) => (
            <TableHeadCell key={index}>{header}</TableHeadCell>
          ))}
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
                    onClick={() => handleInativarPedido(pedido.id)}
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
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  )
}
