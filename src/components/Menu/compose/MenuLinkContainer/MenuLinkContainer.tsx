interface Props {
  children: React.ReactNode
}

function MenuLinkContainer({ children }: Props) {
  return <ul className="flex gap-x-6">{children}</ul>
}

export default MenuLinkContainer
