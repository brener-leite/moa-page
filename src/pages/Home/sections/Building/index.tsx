import Card from "components/Card"
import Section from "components/Section"

function Building() {
  return (
    <Section.Container>
      <div className="mb-6">
        <Section.Title>Under Construction</Section.Title>
      </div>
      <Section.Row>
        <Card.Container>
          <Card.Light position="right" />
          <div className="mb-6">
            <Card.Title>
              <span className="text-pink-1 font-semibold">Challenges</span>
            </Card.Title>
          </div>
          <Card.Text>
            Get ready to push your limits with Moa's Challenges.{" "}
            <span className="text-pink-1 font-semibold">
              Join or create custom runs
            </span>
            , set your own rules, and compete against friends or the global
            community for rewards and bragging rights.
          </Card.Text>
        </Card.Container>
        <img
          src="/assets/challenge-run-section.png"
          alt="Person with hat medidating"
          loading="lazy"
          className="hidden lg:block"
        />
        <img
          src="/assets/challenge-run-section-mobile.png"
          alt="Person with hat medidating"
          loading="lazy"
          className="block lg:hidden"
        />
      </Section.Row>
      <Section.Row>
        <img
          src="/assets/event-run-section.png"
          alt="Map with pins"
          loading="lazy"
          className="hidden lg:block order-1"
        />
        <img
          src="/assets/event-run-section-mobile.png"
          alt="Map with pins"
          loading="lazy"
          className="block lg:hidden order-2"
        />
        <Card.Container className="order-1 lg:order-2">
          <Card.Light position="left" />
          <div className="mb-6">
            <Card.Title>
              <span className="text-pink-1 font-semibold">Global Events</span>
            </Card.Title>
          </div>
          <Card.Text>
            Experience the excitement of running on a global scale with Moa's
            Global Events.{" "}
            <span className="text-pink-1 font-semibold">
              Compete against runners from around the world
            </span>
            , earn prestigious rewards, and be part of something truly
            extraordinary.
          </Card.Text>
        </Card.Container>
      </Section.Row>
    </Section.Container>
  )
}

export default Building
