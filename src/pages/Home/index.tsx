import Banner from "components/Banner"
import DownloadButton from "components/DonwloadButton"
import Container from "components/Container"
import Menu from "components/Menu"
import Features from "./sections/Features"
import Welcome from "./sections/Welcome"
import Roadmap from "./sections/Roadmap"
import Footer from "components/Footer"
import Team from "./sections/Team"
import ModalVideo from "react-modal-video"

import { useState } from "react"

import "./index.css"
import "react-modal-video/scss/modal-video.scss"
import Building from "./sections/Building"

function Home() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="bg-neutral-dark-3" id="home-page">
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={videoOpen}
        videoId="d33CdZDrqmw"
        onClose={() => setVideoOpen(false)}
      />
      <Container>
        <Menu.Container>
          <Menu.Link section="home-page">
            <Menu.Logo />
          </Menu.Link>
          <Menu.LinkContainer>
            <Menu.Link section="section-welcome">Welcome to moa</Menu.Link>
            <Menu.Link section="section-features">Features</Menu.Link>
            <Menu.Link section="section-building">In progress</Menu.Link>
            <Menu.Link section="section-roadmap">Coming next</Menu.Link>
            <Menu.Link section="section-team">Our team</Menu.Link>
          </Menu.LinkContainer>
          <DownloadButton>Download</DownloadButton>
        </Menu.Container>
        <div className="mb-20 pt-[100px]">
          <div className="mb-[24px] lg:mb-[40px]">
            <h2 className="text-start lg:text-center text-[32px] lg:text-xxxl font-light">
              <span className="text-pink-1 font-semibold">Earn money </span>with
              your{" "}
              <span className="text-pink-1 font-semibold">street running </span>
              workouts
            </h2>
          </div>
        </div>
        <Banner openVideo={() => setVideoOpen(true)} />
        <section className="lg:pt-[82px] lg:mb-[30px]" id="section-welcome">
          <Welcome />
        </section>
        <section className="pt-[82px] lg:mb-[30px]" id="section-features">
          <Features />
        </section>
        <section className="pt-[82px] lg:mb-[30px]" id="section-building">
          <Building />
        </section>
        <section className="pt-[82px] lg:mb-[30px]" id="section-roadmap">
          <Roadmap />
        </section>
        <section
          className="pt-[82px] mb-[40px] lg:mb-[100px]"
          id="section-team"
        >
          <Team />
        </section>
        <Footer />
      </Container>
    </div>
  )
}

export default Home
