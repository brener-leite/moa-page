interface Props {
  children: React.ReactNode
  className?: string
}

function CardContainer({ children, className = "" }: Props) {
  return (
    <div
      className={`flex flex-col rounded-3xl bg-neutral-dark-4 p-8 relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  )
}

export default CardContainer
