interface Props {
  children: React.ReactNode
}

function MenuContainer({ children }: Props) {
  return (
    <div className="w-full bg-neutral-dark-2 flex justify-between items-center px-4 py-4 rounded-2xl">
      {children}
    </div>
  )
}

export default MenuContainer
