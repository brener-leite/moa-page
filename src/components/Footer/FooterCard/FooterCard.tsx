interface Props {
  children: React.ReactNode
}

function FooterCard({ children }: Props) {
  return (
    <div className="bg-neutral-dark-1 rounded-[24px] p-[24px] lg:p-[80px]">
      {children}
    </div>
  )
}

export default FooterCard
