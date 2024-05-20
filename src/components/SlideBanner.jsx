import c from "classnames";
export default function SlideBanner({ id, title, description, isTextWhite }) {
  return (
    <div
      className={`h-[344px] md:h-[400px] bg-center bg-banner-${id} lg:bg-banner-${id} bg-no-repeat bg-cover`}
    >
      <div className="mx-auto flex h-full max-w-7xl lg:pl-6 px-6">
        <div
          className={c(
            { "text-white": isTextWhite },
            "mb-6 self-end pr-4 md:mb-0 md:self-center"
          )}
        >
          <h3 className="text-[32px] font-bold whitespace-pre">{title}</h3>
          <h5 className="mt-2">{description}</h5>
        </div>
      </div>
    </div>
  );
}
