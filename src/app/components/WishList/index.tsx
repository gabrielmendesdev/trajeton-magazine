import React, { useState } from 'react'
import { usePedido } from '../../context/PedidoContext'
import { PaginationComponent } from './Pagination'
import axios from 'axios'
import { DeleteModal } from './DeleteModal'
import { ListMobile } from './ListMobile'
import { ListDesktop } from './ListDesktop'
import './style.css'

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
      <ListDesktop pedidos={currentPedidos} handleOpenModal={handleOpenModal} />
      <ListMobile pedidos={currentPedidos} handleOpenModal={handleOpenModal} />
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
