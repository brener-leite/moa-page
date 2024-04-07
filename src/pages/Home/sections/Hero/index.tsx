import Card from "components/Card"
import Section from "components/Section"

function Hero() {
  return (
    <Section.Container>
      <Section.Row>
        <img
          src="/assets/banner-hero-1.png"
          alt="Person tying shoelace"
          loading="lazy"
        />
        <Card.Container>
          <Card.Light position="left" />
          <div className="mb-6">
            <Card.Title>
              Lorem ipsum
              <span className="text-neutral-light-1">
                {" "}
                dolor sit amet consectetur. Esvul morbi sit vitae. Aet et a
                tempor{" "}
              </span>
            </Card.Title>
          </div>
          <Card.Text>
            Lorem Lorem ipsum dolor ipsum dolor{" "}
            <span className="text-pink-1">sit amet</span> Lorem ipsum dolor sit
            amet consectetur. Esvul morbi sit vitae. Aet et a tempor
          </Card.Text>
        </Card.Container>
      </Section.Row>
      <Section.Row>
        <Card.Container>
          <Card.Light position="right" />
          <div className="mb-6">
            <Card.Title>Lorem ipsum</Card.Title>
          </div>
          <Card.Text>
            Lorem Lorem ipsum dolor ipsum dolor{" "}
            <span className="text-pink-1">sit amet</span> Lorem ipsum dolor sit
            amet consectetur. Esvul morbi sit vitae. Aet et a tempor
          </Card.Text>
        </Card.Container>
        <img
          src="/assets/banner-hero-2.png"
          alt="Person looking at wristwatch"
          loading="lazy"
        />
        <img
          src="/assets/banner-hero-3.png"
          alt="Person walking in the rain with colorful effects"
          loading="lazy"
        />
      </Section.Row>
    </Section.Container>
  )
}

export default Hero
