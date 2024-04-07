interface Props {
  children: React.ReactNode
}

function CardTitle({ children }: Props) {
  return (
    <h4 className="text-neutral-light-1 text-xl lg:text-xxxl font-light lg:font-thin">
      {children}
    </h4>
  )
}

export default CardTitle
