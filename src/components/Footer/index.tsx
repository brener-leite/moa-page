function Footer() {
  return (
    <footer>
      <div className="bg-neutral-dark-1 rounded-[24px] p-[24px] lg:p-[60px] flex flex-col">
        <div className="lg:flex lg:justify-between lg:gap-x-[200px]">
          <div className="mb-[50px] lg:mb-0 lg:flex-1">
            <div className="mb-[24px]">
              <img
                src="/assets/icon-text.svg"
                alt="Moa"
                className="w-[100px] lg:w-[150px]"
              />
            </div>
            <p className="text-neutral-light-3 text-sm lg:text-xl">
              Lorem ipsum dolor sitonsec teturadipisicing elit sed do eiusmod
              temporincididunt Laoreet non sagittis aliquam bibendum.
            </p>
          </div>
          <div className="flex flex-col lg:flex-1">
            <p className="mb-[16px] lg:mb-[24px] text-xs opacity-[60%] text-neutral-light-2">
              Follow us
            </p>
            <div className="flex gap-[8px] lg:gap-[14px]">
              <a
                href="https://twitter.com/moa_app"
                className="bg-neutral-dark-3 rounded-[16px] p-[20px]"
              >
                <img
                  src="/assets/icon-twitter.svg"
                  alt="Twitter"
                  className="w-[30px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[24px] lg:py-[32px]">
        <p className="text-xs text-neutral-light-1 opacity-[40%] text-center">
          Copyright © MOA
        </p>
      </div>
    </footer>
  )
}

export default Footer
