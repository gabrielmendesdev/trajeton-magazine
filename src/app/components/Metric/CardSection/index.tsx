import Image from 'next/image'
import Entregador from '../../../assets/Entregador.svg'
import { MetricCard } from './Card'

export const CardSection: React.FC = (): React.ReactNode => {
  return (
    <div>
      <div className="w-full grid grid-rows-3 md:grid-rows-2 md:grid-cols-6 md:grid-flow-col gap-4">
        <div className="flex bg-white row-span-2 col-span-2 items-center">
          <div className="hidden md:block">
            <Image src={Entregador} alt="Entregador" width={200} />
          </div>
          <MetricCard title="Pedidos para entrega" value={100} key={1} />
        </div>
        <div className="col-span-1 md:col-span-2">
          <MetricCard title="Produtos" value={100} key={2} />
        </div>
        <div className="col-span-1 md:col-span-4">
          <MetricCard title="Estoque mínimo" value={10} key={3} />
        </div>
        <div className="md:col-span-2">
          <MetricCard title="Novos clientes" value={2} key={4} />
        </div>
      </div>
    </div>
  )
}
