interface Props {
  children: React.ReactNode
}

function CardTitle({ children }: Props) {
  return <h4 className="text-pink-1 text-xxxl font-medium">{children}</h4>
}

export default CardTitle
