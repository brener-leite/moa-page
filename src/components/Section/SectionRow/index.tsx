interface Props {
  children: React.ReactNode
}

function SectionRow({ children }: Props) {
  return <div className="flex flex-col lg:flex-row gap-4">{children}</div>
}

export default SectionRow
