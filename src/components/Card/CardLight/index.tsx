interface Props {
  position: "right" | "left"
}

function CardLight({ position }: Props) {
  return (
    <div
      className={`
        w-1/2 
        absolute 
        top-0 
        bg-gradient-to-r
        h-full
        ${
          position === "right"
            ? "right-0 from-transparent to-pink-transparent"
            : "left-0 from-pink-transparent"
        }
      `}
    />
  )
}

export default CardLight
