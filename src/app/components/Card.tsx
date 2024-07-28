import Title from './Title'

interface CardProps {
  icon: React.ReactNode
  title: string
  onClick: () => void
}

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  onClick
}): React.ReactNode => {
  return (
    <div
      className="bg-white p-6 rounded-xl gap-2 col-4 cursor-pointer"
      onClick={onClick}
    >
      {icon}
      <Title className="font-medium text-gray-700">{title}</Title>
    </div>
  )
}
