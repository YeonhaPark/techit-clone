export default function StripBanner() {
  return (
    <section className="mt-10 overflow-hidden bg-[#F0F4FA] md:mt-20">
      <div className="cursor-pointer relative">
        <div className="flex flex-col md:justify-center pt-4 absolute top-0 left-1/2 -translate-x-1/2 container-style px-4 md:px-6  w-full h-full">
          <h5 className="mb-1 text-xs font-semibold text-[#072C56] lg:mb-2 lg:text-sm xl:text-base">
            테킷 스쿨 사전알림
          </h5>
          <h3 className="mb-4 text-lg font-semibold">
            지금 사전알림 신청하면
            <br />
            [IT 직무 취업 가이드북]을 드려요!
          </h3>
          <button className="flex items-center text-gray-500 text-xs font-semibold lg:text-sm">
            더 알아보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-1 w-[14px] text-gray-500 lg:w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
        <img
          className="h-[206px] mx-auto"
          src="/images/strip_banner_1280_prenotice.webp"
          srcSet="/images/strip_banner_768_prenotice.webp 760w, /images/strip_banner_1024_prenotice.webp 1000w, /images/strip_banner_1280_prenotice.webp"
          alt="strip-banner"
        />
      </div>
    </section>
  );
}
