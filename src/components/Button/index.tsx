interface Props {
  children: React.ReactNode
  disabled?: boolean
  handleClick: () => void
}

function Button({ children, disabled = false, handleClick }: Props) {
  return (
    <button
      disabled={disabled}
      className={`bg-pink-1 rounded-tl-md rounded-br-md font-semibold py-2 px-4`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
