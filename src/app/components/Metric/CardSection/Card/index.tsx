interface CardProps {
  value: number
  title: string
}

export const MetricCard: React.FC<CardProps> = ({
  title,
  value
}): React.ReactNode => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <p>Total</p>
      <h5
        className={`${value < 10 ? 'text-red-600' : ''} text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
      >
        {value}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{title}</p>
    </div>
  )
}
