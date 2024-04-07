interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return (
    <div className="relative max-w-screen-xl mx-auto px-[15px] xl:px-0 w-full min-h-screen">
      {children}
    </div>
  )
}

export default Container
