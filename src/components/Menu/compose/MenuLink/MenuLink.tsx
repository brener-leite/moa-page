interface Props {
  children: React.ReactNode
  section: string
}

function MenuLink({ children, section }: Props) {
  const scrollIntoView = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return <button onClick={() => scrollIntoView(section)}>{children}</button>
}

export default MenuLink
