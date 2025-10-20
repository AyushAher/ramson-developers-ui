export function HeroSection() {
  return (
    <div className="hero-section d-flex">
      <div className="w-auto d-flex flex-column align-items-center justify-content-center">
        <img src="logo-no-bg.png" className="logo" alt="" />
        <h2 className="theme-color">
          Crafting Code,
          <span> Delivering Solutions</span>
        </h2>
        <p className="theme-color">
          We at <span className="fw-bold">Aerovia Infrasec</span> craft code to
          deliver solutions that exceed your expectations. We deliver all types
          of IT Services and Consultancy to all types of business regardless of
          their industry.
        </p>

        <p className="theme-color">
          Not sure about your requirements?{" "}
          <span className="fw-bold">Get 1 hour consultation for Free!!*</span>
        </p>
        <a
          href="mailto:info@aerovia.co.in"
          className="btn btn-outline-light  navbar-action"
        >
          Book Free Consultation *
        </a>
      </div>
      <img className="w-50 d-none d-md-block" src="/hero.svg" alt="" />
    </div>
  );
}
