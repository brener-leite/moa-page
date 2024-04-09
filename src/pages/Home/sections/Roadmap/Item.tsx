import Card from "components/Card"
import Section from "components/Section"

interface Props {
  imageName: string
  imagePath?: string
  title: string
  description: string
}

function Item({
  imageName,
  imagePath = "/assets/roadmap",
  title,
  description,
}: Props) {
  return (
    <Section.Row className="px-2">
      <img
        src={`${imagePath}/${imageName}.png`}
        loading="lazy"
        className="slide-image-desktop"
      />
      <img
        src={`${imagePath}/${imageName}-mobile.png`}
        loading="lazy"
        className="slide-image-mobile"
      />
      <Card.Container className="w-full">
        <Card.Light position="left" />
        <div className="mb-6">
          <Card.Title>
            <span className="text-pink-1 font-semibold">{title}</span>
          </Card.Title>
        </div>
        <Card.Text>{description}</Card.Text>
      </Card.Container>
    </Section.Row>
  )
}

export default Item
