import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Card from "components/Card"
import Section from "components/Section"
import Item from "./Item"

function Roadmap() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Section.Container>
      <div className="mb-6">
        <Section.Title>Coming Next</Section.Title>
      </div>
      <Slider {...settings}>
        <Item
          imageName="anticheat"
          title="Anti-cheat engine"
          description="Advanced technology ensures fair competition and upholds the integrity of our platform by detecting and preventing cheating attempts during runs."
        />
        <Item
          imageName="coin"
          title="Moa coin on Solana"
          description="Integrating Moa's native cryptocurrency onto the Solana blockchain for improved scalability, security, and efficiency."
        />
        <Item
          imageName="marketplace"
          title="Marketplace"
          description="A dynamic marketplace offering a diverse range of digital assets and souvenirs, where users can buy, sell, and trade within the vibrant Moa ecosystem."
        />
        <Item
          imageName="ios"
          title="iOS app"
          description="Seamlessly access Moa's features and community on your Apple devices with our dedicated iOS application, designed for optimal performance and user experience."
        />
        <Item
          imageName="pass"
          title="Moa Pass"
          description="Unlock exclusive perks, features, and rewards with the premium NFT Moa Pass, enhancing your journey and engagement within the Moa platform."
        />
        <Item
          imageName="nft"
          title="Moa NFT collection"
          description="Curating a unique collection of NFTs (Non-Fungible Tokens) representing digital art, assets, and experiences within the Moa platform."
        />
        <Item
          imageName="wearos"
          title="WearOS app"
          description="Stay connected and track your runs seamlessly with the Moa WearOS application, designed to provide convenient access to Moa features directly from your smartwatch. Additionally, the WearOS app enhances the anti-cheat measures by ensuring accurate tracking and monitoring of your runs, maintaining the integrity and fairness of the competition within the Moa platform."
        />
        <Item
          imageName="challenge-engine"
          title="Challenge engine"
          description="Introducing a robust challenge engine that enables users to create, join, and compete in custom challenges tailored to their preferences and fitness goals."
        />
        <Item
          imageName="community"
          title="Community Clubs"
          description="Establishing community clubs within the Moa platform, providing users with a space to connect, share insights, and participate in group activities with like-minded individuals."
        />
        <Item
          imageName="hub-events"
          title="Traditional Running Events Hub"
          description="Creating a centralized hub for traditional running events, allowing users to discover, register for, and participate in a wide range of runs and competitions worldwide."
        />
      </Slider>
    </Section.Container>
  )
}

export default Roadmap
