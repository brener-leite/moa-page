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
    </Section.Container>
  )
}

export default Features
