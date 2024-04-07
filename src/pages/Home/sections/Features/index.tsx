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
          className="hidden lg:block order-1"
        />
        <img
          src="/assets/daily-run-section-mobile.png"
          alt="Person running"
          loading="lazy"
          className="block lg:hidden order-2"
        />
        <Card.Container className="order-1 lg:order-2">
          <Card.Light position="left" />
          <div className="mb-6">
            <Card.Title>
              <span className="text-pink-1 font-semibold">Daily Runs</span>
            </Card.Title>
          </div>
          <Card.Text>
            Start your day on the right foot with Moa's Daily Runs.{" "}
            <span className="text-pink-1 font-semibold">
              Challenge yourself
            </span>{" "}
            to personal bests, earn tokens, and stay motivated as you track your
            progress every step of the way.
          </Card.Text>
        </Card.Container>
      </Section.Row>
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

export default Features
