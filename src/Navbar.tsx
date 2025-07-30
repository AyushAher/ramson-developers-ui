export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Aerovia Infrasec
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#what-we-do">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.linkedin.com/company/ramson-developers/feed/posts/"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactUs">
                  Contact Us
                </a>
              </li>
            </ul>

            <a
              href="mailto:info@aerovia.co.in"
              className="btn btn-outline-light navbar-action"
            >
              Book Free Consultation *
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
