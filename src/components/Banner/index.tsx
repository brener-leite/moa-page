function Banner() {
  return (
    <div className="relative">
      <img
        src="/assets/coin.png"
        alt="Moa coin"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] w-[74px] lg:w-[108px]"
        loading="lazy"
      />
      <div className="w-full relative rounded-3xl overflow-hidden">
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
        <div className="flex justify-center absolute top-0 inset-x-0 transform translate-y-1/4">
          <h1 className="text-center text-[56px] leading-[60px] lg:text-xxxxl font-black max-w-[450px] lg:max-w-[800px]">
            Welcome to moa
          </h1>
        </div>
      </div>
      <div className="flex justify-center gap-x-[10px] lg:gap-x-[40px] -translate-y-[160px] lg:-translate-y-[60px]">
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
