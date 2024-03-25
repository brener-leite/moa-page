interface ISection {
  link: string
  label: string
}

interface Props {
  sections: ISection[]
}

function Menu({ sections }: Props) {
  const scrollIntoView = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <menu className="flex py-20">
      {sections.map(({ link, label }) => (
        <li className="mr-10 last:mr-0">
          <button
            onClick={() => {
              scrollIntoView(link)
            }}
          >
            {label}
          </button>
        </li>
      ))}
    </menu>
  )
}

export default Menu
