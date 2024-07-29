import React, { useState, useEffect } from 'react'
import { usePedido } from '../../context/PedidoContext'
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react'
import { PaginationComponent } from '../Pagination'
import { TrashIcon } from '@heroicons/react/16/solid'
import axios from 'axios'
import { formatDate } from '../../utils/formatDate'
import { tableHeaders } from '../../utils/tableHeaders'
import { DeleteModal } from './DeleteModal'

const itemsPerPage = 5

export const WishList: React.FC = (): React.ReactNode => {
  const { pedidos, setPedidos } = usePedido()
  const [currentPage, setCurrentPage] = useState(1)
  const [openModal, setOpenModal] = useState(false)
  const [selectedPedidoId, setSelectedPedidoId] = useState<number | null>(null)

  const toggleModal = () => setOpenModal(!openModal)

  const fetchPedidos = async () => {
    try {
      const response = await axios.get('http://localhost:5245/api/pedido')
      setPedidos(response.data.dados)
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error)
    }
  }

  const totalPages = Math.ceil(pedidos.length / itemsPerPage)
  const indexOfLastPedido = currentPage * itemsPerPage
  const indexOfFirstPedido = indexOfLastPedido - itemsPerPage
  const currentPedidos = pedidos.slice(indexOfFirstPedido, indexOfLastPedido)

  const onPageChange = (page: number) => setCurrentPage(page)

  const handleInativarPedido = async (id: number) => {
    try {
      await axios.put(`http://localhost:5245/api/pedido/${id}`)
      fetchPedidos()
      setOpenModal(false)
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error)
    }
  }

  function handleOpenModal(id: number): void {
    setSelectedPedidoId(id)
    toggleModal()
  }

  return (
    <div className="flex flex-col overflow-x-auto">
      <Table className="hidden lg:table">
        <TableHead className="text-center hidden lg:table-header-group">
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
      <Card className="block lg:hidden">
        {currentPedidos.map((pedido) => (
          <div
            key={pedido.id}
            className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex justify-between flex-col">
                  <span className="font-bold">Núm. Pedido:</span>
                  <span className="text-blue-500">{pedido.id}</span>
                </div>
                <div className="flex justify-between flex-col">
                  <span className="font-bold">Valor:</span>
                  <span>${pedido.value.toFixed(2)}</span>
                </div>
                <div className="flex justify-between flex-col">
                  <span className="font-bold">Data:</span>
                  <span>
                    {pedido.date
                      ? new Date(formatDate(pedido.date)).toLocaleDateString()
                      : '-'}
                  </span>
                </div>
              </div>
              <div className="text-center w-full bg-green-200 text-green-500 font-medium rounded-2xl">
                <span className="text-center">{pedido.status}</span>
              </div>
              <div className="m-auto">
                <span>
                  {pedido.status === 'Entregue' ? (
                    <button
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => handleOpenModal(pedido.id)}
                    >
                      <TrashIcon className="text-gray-800 w-4 m-auto" />
                    </button>
                  ) : (
                    '-'
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Card>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <DeleteModal
        show={openModal}
        onClose={toggleModal}
        onConfirm={() =>
          selectedPedidoId && handleInativarPedido(selectedPedidoId)
        }
      />
    </div>
  )
}
