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
  }

  return (
    <Section.Container>
      <div className="mb-6">
        <Section.Title>Roadmap</Section.Title>
      </div>
      <Slider {...settings}>
        <Section.Row>
          <img
            src="/assets/banner-hero-3.png"
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
              <span className="text-pink-1">sit amet</span> Lorem ipsum dolor
              sit amet consectetur. Esvul morbi sit vitae. Aet et a tempor
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row>
          <img
            src="/assets/banner-hero-3.png"
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
              <span className="text-pink-1">sit amet</span> Lorem ipsum dolor
              sit amet consectetur. Esvul morbi sit vitae. Aet et a tempor
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row>
          <img
            src="/assets/banner-hero-3.png"
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
              <span className="text-pink-1">sit amet</span> Lorem ipsum dolor
              sit amet consectetur. Esvul morbi sit vitae. Aet et a tempor
            </Card.Text>
          </Card.Container>
        </Section.Row>
        <Section.Row>
          <img
            src="/assets/banner-hero-3.png"
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
              <span className="text-pink-1">sit amet</span> Lorem ipsum dolor
              sit amet consectetur. Esvul morbi sit vitae. Aet et a tempor
            </Card.Text>
          </Card.Container>
        </Section.Row>
      </Slider>
    </Section.Container>
  )
}

export default Roadmap
