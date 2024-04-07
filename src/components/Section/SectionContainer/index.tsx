interface Props {
  children: React.ReactNode
}

function SectionContainer({ children }: Props) {
  return <div className="flex flex-col gap-4">{children}</div>
}

export default SectionContainer
