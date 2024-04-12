import Card from "components/Card"
import Section from "components/Section"

function Welcome() {
  return (
    <Section.Container>
      <Section.Row>
        <img
          src="/assets/banner-hero-1.png"
          alt="Person tying shoelace desktop"
          loading="lazy"
          className="hidden lg:block order-1"
        />
        <img
          src="/assets/banner-hero-mobile-1.png"
          alt="Person tying shoelace mobile"
          loading="lazy"
          className="block lg:hidden order-2"
        />
        <Card.Container className="order-1 lg:order-2">
          <Card.Light position="left" />
          <div className="mb-6">
            <Card.Title>
              Join the{" "}
              <span className="text-pink-1 font-semibold">
                Global Running Community
              </span>
            </Card.Title>
          </div>
          <Card.Text>
            Experience the thrill of running with fellow enthusiasts{" "}
            <span className="text-pink-1 font-semibold">
              from around the world
            </span>
            . Moa connects you with a vibrant global community, where every step
            counts towards shared achievements and rewards.
          </Card.Text>
        </Card.Container>
      </Section.Row>
      <Section.Row>
        <Card.Container>
          <Card.Light position="right" />
          <div className="mb-6">
            <Card.Title>
              Earn <span className="text-pink-1 font-semibold">Rewards</span> on
              Solana as You Run
            </Card.Title>
          </div>
          <Card.Text>
            Embark on your running journey with Moa and turn every stride into a
            rewarding experience.{" "}
            <span className="text-pink-1 font-semibold">Earn tokens</span> and
            exclusive rewards while you challenge yourself, connect with others,
            and explore new horizons in the world of street running.
          </Card.Text>
        </Card.Container>
        <div className="flex gap-4 lg:max-w-[100%] lg:hidden">
          <img
            src="/assets/banner-hero-2.png"
            alt="Person looking at wristwatch"
            loading="lazy"
            className="w-full max-w-[calc(50%-0.5rem)] lg:max-w-[100%]"
          />
          <img
            src="/assets/banner-hero-3.png"
            alt="Person walking in the rain with colorful effects"
            loading="lazy"
            className="w-full max-w-[calc(50%-0.5rem)]"
          />
        </div>
        <img
          src="/assets/banner-hero-2.png"
          alt="Person looking at wristwatch"
          loading="lazy"
          className="max-w-[calc(50%-0.5rem)] lg:max-w-[100%] hidden lg:block"
        />
        <img
          src="/assets/banner-hero-3.png"
          alt="Person walking in the rain with colorful effects"
          loading="lazy"
          className="max-w-[calc(50%-0.5rem)] lg:max-w-[100%] hidden lg:block"
        />
      </Section.Row>
    </Section.Container>
  )
}

export default Welcome
