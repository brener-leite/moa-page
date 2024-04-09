interface Props {
  openVideo: () => void
}

function Banner({ openVideo }: Props) {
  return (
    <div className="relative">
      <img
        src="/assets/coin.png"
        alt="Moa coin"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] w-[74px] lg:w-[108px]"
        loading="lazy"
      />
      <div className="w-full relative overflow-hidden">
        <img
          src="/assets/banner.png"
          alt="Welcome banner"
          loading="lazy"
          className="w-full hidden lg:block"
        />
        <img
          src="/assets/banner-mobile.png"
          alt="Welcome banner"
          loading="lazy"
          className="w-full block lg:hidden"
        />
        <div className="flex flex-col items-center absolute top-[40px] inset-x-0">
          <h1 className="text-center text-[56px] leading-[60px] lg:text-xxxxl font-black mb-[24px] lg:mb-[32px] lg:max-w-[990px]">
            Welcome to moa
          </h1>
          <button
            onClick={openVideo}
            className="flex items-center bg-pink-1 rounded-tl-[16px] rounded-br-[16px] font-semibold py-[12px] px-4 max-w-max"
          >
            <span className="mr-[8px]">See Our Pitching</span>
            <div className="bg-neutral-light-1 p-[7px] rounded-tl-[8px] rounded-br-[8px]">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.925781 10.802C0.925781 11.1911 1.35074 11.4311 1.68398 11.2302L9.62278 6.44291C9.94466 6.24881 9.94531 5.78227 9.62397 5.58728L1.68517 0.76984C1.35196 0.567639 0.925781 0.807529 0.925781 1.19729L0.925781 10.802Z"
                  fill="#D9D9D9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.925781 10.802C0.925781 11.1911 1.35074 11.4311 1.68398 11.2302L9.62278 6.44291C9.94466 6.24881 9.94531 5.78227 9.62397 5.58728L1.68517 0.76984C1.35196 0.567639 0.925781 0.807529 0.925781 1.19729L0.925781 10.802Z"
                  fill="#E50D5A"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-x-[10px] lg:gap-x-[40px] xs:-translate-y-[60px] sm:-translate-y-[120px] lg:-translate-y-[60px] xl-custom:-translate-y-[160px]">
        <div className="-translate-y-[40px]">
          <img
            src="/assets/moa-app-run.png"
            alt="Mobile app showing screen of run"
            loading="lazy"
            className="min-w-[160px]"
          />
        </div>
        <div>
          <img
            src="/assets/moa-app-home.png"
            alt="Mobile app showing screen of run"
            loading="lazy"
            className="min-w-[160px]"
          />
        </div>
        <div className="-translate-y-[40px]">
          <img
            src="/assets/moa-app-run.png"
            alt="Mobile app showing screen of run"
            loading="lazy"
            className="min-w-[160px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
