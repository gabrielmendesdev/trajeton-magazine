import React from 'react'
import { TrashIcon } from '@heroicons/react/16/solid'
import { formatDate } from '@/app/utils/formatDate'

interface ListMobileProps {
  pedidos: any[]
  handleOpenModal: (id: number) => void
}

export const ListMobile: React.FC<ListMobileProps> = ({
  pedidos,
  handleOpenModal
}) => {
  return (
    <div className="block lg:hidden ">
      {pedidos.map((pedido) => (
        <div
          key={pedido.id}
          className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900"
        >
          <div className="flex flex-col gap-2 font-medium">
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
    </div>
  )
}
