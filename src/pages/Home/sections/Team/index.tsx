import EmployeeCard from "components/EmployeeCard"
import Section from "components/Section"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function Team() {
  const settings = {
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 0,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <Section.Title>Our Team</Section.Title>
      </div>
      <div className="">
        <Slider {...settings}>
          <EmployeeCard
            name="Andrey Luz"
            position="Product Design"
            src="/assets/dedey-card.png"
            link="https://www.linkedin.com/in/andrey-l-6ba7bba8/"
          />
          <EmployeeCard
            name="Brener Leite"
            position="Software Engineer"
            src="/assets/eu-card.png"
            link="https://www.linkedin.com/in/brener-leite/"
          />
          <EmployeeCard
            name="Gabriel Ribeiro"
            position="Software Engineer"
            src="/assets/nogs-card.png"
            link="https://www.linkedin.com/in/nogueira-gabriel/"
          />
          <EmployeeCard
            name="Guilherme Paes"
            position="Creative Designer"
            src="/assets/guigui-card.png"
            link="https://www.linkedin.com/in/guilhermepaes/"
          />
          <EmployeeCard
            name="Luiz Torres"
            position="Software Engineer"
            src="/assets/dindal-card.png"
            link="https://www.linkedin.com/in/luizgtorres/"
          />
        </Slider>
      </div>
    </div>
  )
}

export default Team
