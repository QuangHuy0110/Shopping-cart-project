const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-grey text-muted">
      <section className>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-6 col-lg-4 col-xl-3 mx-auto d-flex flex-column align-items-center mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary" />
                Company name
              </h6>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="col-md-6 col-lg-2 col-xl-3 mx-auto d-flex flex-column align-items-center mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Merchandise
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Clothes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accessory
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Teach
                </a>
              </p>
            </div>

            <div className="col-md-6 col-lg-2 col-xl-3 mx-auto d-flex flex-column align-items-center mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <i className="fa-brands fa-github"></i>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </p>
            </div>

            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto d-flex flex-column align-items-center mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-secondary" />
                Van Phuc, Ha Dong, Ha noi
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary" />
                huyta0110@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-secondary" />+ 84 399276318
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2022 Copyright:{" "}
        <a
          className="text-reset fw-bold"
          href="https://www.facebook.com/quanghuyta.01/"
        >
          Ta Quang Huy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
