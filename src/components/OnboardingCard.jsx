import SimpleTag from "./SimpleTag";

export default function OnboardingCard({
  title,
  description,
  image,
  price,
  discountedPrice,
  tags,
}) {
  return (
    <li>
      <img
        src={`/images/onboarding/${image}.png`}
        alt={image}
        className="w-full rounded-lg md:rounded-none lg:rounded-xl"
      ></img>
      <div className="mt-4">
        <div className="flex items-center gap-[6px]">
          {tags.map((tag) => (
            <SimpleTag name={tag} key={tag} />
          ))}
        </div>
        <h3 className="mt-3 text-sm font-semibold text-gray-800 lg:text-lg">
          {title}
        </h3>
        <h5 className="mt-3 text-xs text-techit-gray-200 lg:text-base">
          {description}
        </h5>
        <div className="mt-2">
          <span className="text-sm font-medium text-gray-800 lg:text-base">
            {discountedPrice.toLocaleString()}원
          </span>
          <span className="ml-1 text-xs text-gray-400 line-through lg:text-sm">
            {price.toLocaleString()}원
          </span>
        </div>
        <span className="mt-2 inline-block rounded bg-techit-yellow-100 px-1.5 py-0.5 text-xs font-semibold text-techit-yellow-350 lg:text-xs">
          수료시 전액 환급
        </span>
      </div>
    </li>
  );
}
