interface Props {
  text: string
  section: string
}

function MenuLink({ text, section }: Props) {
  const scrollIntoView = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <li>
      <button onClick={() => scrollIntoView(section)}>{text}</button>
    </li>
  )
}

export default MenuLink
