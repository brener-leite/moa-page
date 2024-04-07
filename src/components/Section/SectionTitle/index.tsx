interface Props {
  children: React.ReactNode
}

function SectionTitle({ children }: Props) {
  return <span className="text-xl text-neutral-light-2">{children}</span>
}

export default SectionTitle
