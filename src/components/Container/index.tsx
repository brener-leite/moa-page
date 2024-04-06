interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 w-full min-h-screen">
      {children}
    </div>
  )
}

export default Container
