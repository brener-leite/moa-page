interface Props {
  children: React.ReactNode
}

function MenuContainer({ children }: Props) {
  return (
    <div
      className="
        z-20
        bg-neutral-dark-2 
        flex 
        justify-between 
        items-center 
        p-4
        rounded-2xl 
        backdrop-blur-lg
        fixed
        top-[10px]
        max-w-[1280px]
        left-[15px]
        right-[15px]
        xl:left-[unset]
        xl:right-[unset]
        xl:w-full
      "
    >
      {children}
    </div>
  )
}

export default MenuContainer
