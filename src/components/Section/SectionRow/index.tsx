interface Props {
  children: React.ReactNode
  className?: string
}

function SectionRow({ children, className = "" }: Props) {
  return (
    <div className={`flex flex-col lg:flex-row gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default SectionRow
