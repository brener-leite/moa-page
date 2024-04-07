import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Card from "components/Card"
import Section from "components/Section"
import "./index.css"

function Roadmap() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Section.Container>
      <div className="mb-6">
        <Section.Title>Roadmap</Section.Title>
      </div>
      <Slider {...settings}>
        <Section.Row className="px-2">
          <img
            src="/assets/roadmap-marketplace.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-desktop"
          />
          <img
            src="/assets/roadmap-marketplace-mobile.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-mobile"
          />
          <Card.Container>
            <Card.Light position="left" />
            <div className="mb-6">
              <Card.Title>
                <span className="text-pink-1 font-semibold">Daily Runs</span>
              </Card.Title>
            </div>
            <Card.Text>
              Enjoy daily runs to boost your workout routine. Already available
              in the pre-alpha version of Moa, Daily Runs offer an opportunity
              to earn rewards while you run.
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row className="px-2">
          <img
            src="/assets/roadmap-marketplace.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-desktop"
          />
          <img
            src="/assets/roadmap-marketplace-mobile.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-mobile"
          />
          <Card.Container>
            <Card.Light position="left" />
            <div className="mb-6">
              <Card.Title>
                <span className="text-pink-1 font-semibold">Challenges</span>
              </Card.Title>
            </div>
            <Card.Text>
              Challenge yourself with Moa's Challenges. While still in preview
              stage in the pre-alpha version, these customized runs allow you to
              create or participate in unique challenges and compete for
              rewards.
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row className="px-2">
          <img
            src="/assets/roadmap-marketplace.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-desktop"
          />
          <img
            src="/assets/roadmap-marketplace-mobile.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-mobile"
          />
          <Card.Container>
            <Card.Light position="left" />
            <div className="mb-6">
              <Card.Title>
                <span className="text-pink-1 font-semibold">Global Events</span>
              </Card.Title>
            </div>
            <Card.Text>
              Get ready for thrilling competitions on a global scale with Moa's
              Global Events. This feature will be available in future updates,
              providing the opportunity to compete with runners from around the
              world.
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row className="px-2">
          <img
            src="/assets/roadmap-marketplace.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-desktop"
          />
          <img
            src="/assets/roadmap-marketplace-mobile.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-mobile"
          />
          <Card.Container>
            <Card.Light position="left" />
            <div className="mb-6">
              <Card.Title>
                <span className="text-pink-1 font-semibold">
                  NFT Marketplace
                </span>
              </Card.Title>
            </div>
            <Card.Text>
              Explore a world of collectible digital assets with Moa's NFT
              Marketplace. This feature will be launched soon, allowing users to
              buy and sell unique NFTs directly within the app.
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row className="px-2">
          <img
            src="/assets/roadmap-marketplace.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-desktop"
          />
          <img
            src="/assets/roadmap-marketplace-mobile.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-mobile"
          />
          <Card.Container>
            <Card.Light position="left" />
            <div className="mb-6">
              <Card.Title>
                <span className="text-pink-1 font-semibold">
                  Community Clubs
                </span>
              </Card.Title>
            </div>
            <Card.Text>
              Connect with fellow runners and join vibrant communities with
              Moa's Community Clubs. Stay tuned for future updates, where you'll
              be able to join thematic groups and share your passion for
              running.
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row className="px-2">
          <img
            src="/assets/roadmap-marketplace.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-desktop"
          />
          <img
            src="/assets/roadmap-marketplace-mobile.png"
            alt="Person running"
            loading="lazy"
            className="slide-image-mobile"
          />
          <Card.Container>
            <Card.Light position="left" />
            <div className="mb-6">
              <Card.Title>
                <span className="text-pink-1 font-semibold">
                  Souvenir Store
                </span>
              </Card.Title>
            </div>
            <Card.Text>
              Find exclusive products to take your running experience to the
              next level with Moa's Souvenir Store. Soon, users will be able to
              purchase shirts, hats, and other Moa-related items to show their
              support for the community.
            </Card.Text>
          </Card.Container>
        </Section.Row>
      </Slider>
    </Section.Container>
  )
}

export default Roadmap
