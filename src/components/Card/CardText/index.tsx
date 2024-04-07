interface Props {
  children: React.ReactNode
}

function CardText({ children }: Props) {
  return <p className="text-dm text-neutral-light-2 font-thin">{children}</p>
}

export default CardText
