import Reveal from "./Reveal";

const COMPANIES = [
  { name: "Super Sushi", src: "/photos/logo-super-sushi.png" },
  { name: "Zuiderzoet", src: "/photos/logo-zuiderzoet.png" },
];

export default function TrustedBy() {
  return (
    <Reveal className="trusted-by">
      <p className="trusted-by-label">Trusted by teams like</p>
      <div className="trusted-by-logos">
        {COMPANIES.map((c) => (
          <span className="trusted-by-logo" key={c.name}>
            <img src={c.src} alt={c.name} />
          </span>
        ))}
      </div>
    </Reveal>
  );
}
