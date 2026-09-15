import Reveal from "./Reveal";

export default function PhotoBand() {
  return (
    <section className="photo-band">
      <div className="section-inner photo-band-inner">
        <Reveal className="photo-band-copy">
          <p className="eyebrow">Built for real teams</p>
          <h2 className="section-title">People, not just data points</h2>
          <p className="section-sub photo-band-sub">
            Shiftline is built for the people actually running the floor — baristas, servers,
            shop staff, and the managers keeping it all together. It should feel as natural as
            the job itself.
          </p>
        </Reveal>
        <Reveal delay={120} className="photo-band-images">
          <img
            className="photo-band-img photo-band-img-a"
            src="/photos/barista.jpg"
            alt="A café worker checking their schedule on a tablet at the counter"
            loading="lazy"
          />
          <img
            className="photo-band-img photo-band-img-b"
            src="/photos/counter.jpg"
            alt="A shop employee smiling while helping a customer at the counter"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
