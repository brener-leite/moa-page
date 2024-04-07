import Card from "components/Card"
import Section from "components/Section"

function Features() {
  return (
    <Section.Container>
      <div className="mb-6">
        <Section.Title>Features</Section.Title>
      </div>
      <Section.Row>
        <img
          src="/assets/daily-run-section.png"
          alt="Person running"
          loading="lazy"
        />
        <Card.Container>
          <Card.Light position="left" />
          <div className="mb-6">
            <Card.Title>Daily Run</Card.Title>
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
            <Card.Title>Challenges</Card.Title>
          </div>
          <Card.Text>
            Lorem Lorem ipsum dolor ipsum dolor{" "}
            <span className="text-pink-1">sit amet</span> Lorem ipsum dolor sit
            amet consectetur. Esvul morbi sit vitae. Aet et a tempor
          </Card.Text>
        </Card.Container>
        <img
          src="/assets/challenge-run-section.png"
          alt="Person with hat medidating"
          loading="lazy"
        />
      </Section.Row>
      <Section.Row>
        <img
          src="/assets/event-run-section.png"
          alt="Map with pins"
          loading="lazy"
        />
        <Card.Container>
          <Card.Light position="left" />
          <div className="mb-6">
            <Card.Title>Global Events</Card.Title>
          </div>
          <Card.Text>
            Lorem Lorem ipsum dolor ipsum dolor{" "}
            <span className="text-pink-1">sit amet</span> Lorem ipsum dolor sit
            amet consectetur. Esvul morbi sit vitae. Aet et a tempor
          </Card.Text>
        </Card.Container>
      </Section.Row>
    </Section.Container>
  )
}

export default Features
