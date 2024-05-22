export default function SocialIcon({ icon }) {
  return (
    <img src={`/images/icons/${icon}.svg`} className="w-6 h-w" alt={icon} />
  );
}
