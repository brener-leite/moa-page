interface Props {
  children: React.ReactNode
}

function MenuLinkContainer({ children }: Props) {
  return <div className="hidden lg:flex gap-x-6">{children}</div>
}

export default MenuLinkContainer
