import Container from "components/Container"
import Menu from "components/Menu"

function Home() {
  return (
    <Container>
      <Menu
        sections={[
          {
            link: "#home-section",
            label: "Home",
          },
          {
            link: "#about-section",
            label: "About",
          },
          {
            link: "#economy-section",
            label: "Economy",
          },
          {
            link: "#roadmap-section",
            label: "Roadmap",
          },
          {
            link: "#contact-section",
            label: "Contact",
          },
        ]}
      />
      <section id="#home-section" className="h-96 bg-gray-500"></section>
      <section id="#about-section" className="h-96 bg-sky-500"></section>
      <section id="#economy-section" className="h-96 bg-slate-200"></section>
      <section id="#roadmap-section" className="h-96 bg-red-500"></section>
      <section id="#contact-section" className="h-96 bg-green-500"></section>
    </Container>
  )
}

export default Home
