import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import axios from 'axios'
import { Pedido } from '../models/pedido'

interface PedidoContextType {
  pedidos: Pedido[]
  loading: boolean
  setPedidos: React.Dispatch<React.SetStateAction<Pedido[]>>
}

const PedidoContext = createContext<PedidoContextType | undefined>(undefined)

export const usePedido = (): PedidoContextType => {
  const context = useContext(PedidoContext)
  if (!context) {
    throw new Error('usePedido must be used within a PedidoProvider')
  }
  return context
}

interface PedidoProviderProps {
  children: ReactNode
}

export const PedidoProvider: React.FC<PedidoProviderProps> = ({ children }) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(
          'https://trajetonapi.azurewebsites.net/api/pedido'
        )
        console.log(response.data.dados)
        setPedidos(response.data.dados)
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPedidos()
  }, [])

  return (
    <PedidoContext.Provider value={{ pedidos, loading, setPedidos }}>
      {children}
    </PedidoContext.Provider>
  )
}
