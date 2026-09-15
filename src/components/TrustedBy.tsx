import Reveal from "./Reveal";

const COMPANIES = [
  { name: "Super Sushi", src: "/photos/logo-super-sushi.png", showName: true },
  { name: "Zuiderzoet", src: "/photos/logo-zuiderzoet.png", showName: false },
];

export default function TrustedBy() {
  return (
    <Reveal className="trusted-by" id="customers">
      <p className="trusted-by-label">Trusted by teams like</p>
      <div className="trusted-by-logos">
        {COMPANIES.map((c) => (
          <span className="trusted-by-logo" key={c.name}>
            <img src={c.src} alt={c.name} />
            {c.showName && <span className="trusted-by-name">{c.name}</span>}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
