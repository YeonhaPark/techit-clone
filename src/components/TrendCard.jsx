export default function TrendCard({
  title,
  author,
  image,
  publishedAt,
  views,
  organization,
}) {
  return (
    <li>
      <img
        src={`/images/trend/${image}.webp`}
        alt={image}
        className="w-full rounded-lg md:rounded-none lg:rounded-xl"
      ></img>
      <div className="mt-4">
        <h3 className="mt-3 mb-2 text-sm font-semibold text-gray-800 lg:text-lg">
          {title}
        </h3>
        <p className="mb-2 break-words text-sm text-techit-gray-200 lg:text-base">
          {`${author}${organization ? " | " + organization : ""}`}
        </p>
        <div className="mt-2">
          <span className="text-xs text-gray-500 lg:text-sm">{`${views} views · ${publishedAt}`}</span>
        </div>
      </div>
    </li>
  );
}
