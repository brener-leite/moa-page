import Banner from "components/Banner"
import Button from "components/Button"
import Container from "components/Container"
import Menu from "components/Menu"
import Features from "./sections/Features"
import Hero from "./sections/Hero"
import Roadmap from "./sections/Roadmap"

function Home() {
  return (
    <div className="bg-neutral-dark-3">
      <Container>
        <div className="mb-12">
          <Menu.Container>
            <Menu.Logo />
            <Menu.LinkContainer>
              <Menu.Link text="Hero" section="section-hero" />
              <Menu.Link text="Features" section="section-features" />
              <Menu.Link text="Roadmap" section="section-roadmap" />
              <Menu.Link text="News" section="section-news" />
            </Menu.LinkContainer>
            <div>
              <Button handleClick={() => console.log("click")}>Download</Button>
            </div>
          </Menu.Container>
        </div>
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-center text-xxxl">
              <span className="text-pink-1">Earn money </span>with your{" "}
              <span className="text-pink-1">street running </span>workouts
            </h2>
          </div>
          <h3 className="text-center text-md font-thin">
            LoremLorem ipsum dolor ipsum dolor{" "}
            <span className="text-lg text-pink-1">sit amet</span>
          </h3>
        </div>
        <div className="relative mb-12">
          <img
            src="/assets/coin.png"
            alt="Moa coin"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            loading="lazy"
          />
          <Banner />
          <div className="flex justify-center gap-4">
            <div className="-translate-y-40">
              <img
                src="/assets/moa-app-run.png"
                alt="Mobile app showing screen of run"
                loading="lazy"
              />
            </div>
            <div className="-translate-y-28">
              <img
                src="/assets/moa-app-home.png"
                alt="Mobile app showing screen of run"
                loading="lazy"
              />
            </div>
            <div className="-translate-y-40">
              <img
                src="/assets/moa-app-run.png"
                alt="Mobile app showing screen of run"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <section className="relative mb-20" id="section-hero">
          <Hero />
        </section>
        <section className="relative mb-20" id="section-features">
          <Features />
        </section>
        <section id="section-roadmap">
          <Roadmap />
        </section>
      </Container>
    </div>
  )
}

export default Home
