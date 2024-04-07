function Banner() {
  return (
    <div className="w-full relative rounded-3xl overflow-hidden">
      <img
        src="/assets/banner.png"
        alt="Welcome banner"
        className="w-full"
        loading="lazy"
      />
      <h1 className="text-center text-xxxxl font-black absolute top-0 inset-x-0 transform translate-y-1/4">
        Welcome to
        <br />
        moa
      </h1>
    </div>
  )
}

export default Banner
