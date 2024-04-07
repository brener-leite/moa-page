import Banner from "components/Banner"
import DownloadButton from "components/DonwloadButton"
import Container from "components/Container"
import Menu from "components/Menu"
import Features from "./sections/Features"
import Welcome from "./sections/Welcome"
import Roadmap from "./sections/Roadmap"
import Footer from "components/Footer"

function Home() {
  return (
    <div className="bg-neutral-dark-3" id="home-page">
      <Container>
        <Menu.Container>
          <Menu.Link section="home-page">
            <Menu.Logo />
          </Menu.Link>
          <Menu.LinkContainer>
            <Menu.Link section="section-welcome">Welcome to moa</Menu.Link>
            <Menu.Link section="section-features">Features</Menu.Link>
            <Menu.Link section="section-roadmap">Roadmap</Menu.Link>
          </Menu.LinkContainer>
          <DownloadButton>Download</DownloadButton>
        </Menu.Container>
        <div className="mb-20 pt-[100px]">
          <div className="mb-[24px] lg:mb-[40px]">
            <h2 className="text-center text-[32px] lg:text-xxxl">
              <span className="text-pink-1">Earn money </span>with your{" "}
              <span className="text-pink-1">street running </span>workouts
            </h2>
          </div>
          <h3 className="text-center text-md font-extralight">
            Run with{" "}
            <span className="text-lg text-pink-1 font-semibold">anyone</span> on
            the planet
          </h3>
        </div>
        <Banner />
        <section className="lg:pt-[82px] lg:mb-[30px]" id="section-welcome">
          <Welcome />
        </section>
        <section className="pt-[82px] lg:mb-[30px]" id="section-features">
          <Features />
        </section>
        <section
          className="pt-[82px] mb-[40px] lg:mb-[100px]"
          id="section-roadmap"
        >
          <Roadmap />
        </section>
        <Footer />
      </Container>
    </div>
  )
}

export default Home
