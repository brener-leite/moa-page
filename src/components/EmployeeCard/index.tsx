interface Props {
  name: string
  position: string
  src: string
  link: string
}

function EmployeeCard({ name, position, src, link }: Props) {
  return (
    <div className="relative px-2">
      <img src={src} loading="lazy" className="w-full" />
      <div className="absolute bottom-[10px] left-[50%] -translate-x-[50%] bg-[#121212E0] rounded-[16px] flex flex-col p-[20px] w-[calc(100%-24px)]">
        <span className="text-neutral-light-1 font-semibold text-sm mb-[8px]">
          {name}
        </span>
        <span className="text-neutral-light-1 font-extralight text-xs mb-[18px]">
          {position}
        </span>
        <a
          href={link}
          className="flex items-center justify-between text-sm font-medium text-pink-1 w-full"
        >
          <span>Linkedin</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4693 4L5.5293 4.94L8.58263 8L5.5293 11.06L6.4693 12L10.4693 8L6.4693 4Z"
              fill="#E50D5A"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default EmployeeCard
