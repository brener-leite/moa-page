interface Props {
  children: React.ReactNode
}

function CardText({ children }: Props) {
  return (
    <p className="text-dm text-neutral-light-2 font-extralight">{children}</p>
  )
}

export default CardText
