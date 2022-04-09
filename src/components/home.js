import React from "react";
import "./home.css";
import nftStorageUtil from "./nft-storage";
import loginCall from "./login-call";

export default class Home extends React.Component {
  //   orgName = "";
  //   desc = "";
  //   amount = "";
  //   email = "";
  //   recp = "";
  //   art = "";

  constructor(props) {
    super();

    const user = loginCall.getCurrentUser();

    this.state = {
      ethAdd: user ? user.get("ethAddress") : "Connect Wallet",
      uri: "",
      isURIAvail: false,
      orgName: "",
      desc: "",
      amount: "",
      email: "",
      recp: "",
      art: "",
      tokenId: "",
      modalVisibility: "hidden",
      modal2Visibility: "hidden",
    };
  }

  render() {
    return (
      <div>
        <header className="header">
          <nav className="nav">
            <img
              src="/img/collect.webp"
              alt="Bankist logo"
              className="nav__logo"
              id="logo"
              designer="Jonas"
              data-version-number="3.0"
            />
            <ul className="nav__links">
              <li className="nav__item">
                <a
                  className="nav__link"
                  href="#section--1"
                  onClick={() => {
                    this.setState({ ...this.state, modal2Visibility: "" });
                  }}
                >
                  Features
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#section--2">
                  Operations
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#section--3">
                  Testimonials
                </a>
              </li>
              <li className="nav__item">
                <a
                  className="nav__link nav__link--btn btn--show-modal"
                  href="#modal--1"
                  onClick={() => {
                    this.setState({ ...this.state, modalVisibility: "" });
                  }}
                >
                  Minter Form
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__title">
            {/* <!-- <h1 onclick="alert('HTML alert')"> --> */}
            <h1>
              When
              {/* <!-- Green highlight effect --> */}
              <span className="highlight"> minting </span>
              meets
              <br />
              <span className="highlight">minimalist</span>
            </h1>
            <h4>A simpler minting experience for a simpler life.</h4>
            <button className="btn--text btn--scroll-to">Learn more</button>
            <img
              src="/img/cryptoPunk1.jpg"
              className="header__img"
              alt="Minimalist bank items"
            />
          </div>
        </header>

        <section className="section" id="section--1">
          <div className="section__title">
            <h2 className="section__description">Features</h2>
            <h3 className="section__header">
              Everything you need in POSP and more.
            </h3>
          </div>

          <div className="features">
            <img
              src="/img/digital-lazy.jpg"
              data-src="/img/digital.jpg"
              alt="Computer"
              className="features__img lazy-img"
            />
            <div className="features__feature">
              <div className="features__icon">
                <svg>
                  <use href="/img/icons.svg#icon-monitor"></use>
                </svg>
              </div>
              <h5 className="features__header">100% digital asset</h5>
              <p>
                Unmutable digital asset with data stored on-chain, No
                modification in the dispatched NFT's.
              </p>
            </div>

            <div className="features__feature">
              <div className="features__icon">
                <svg>
                  <use href="/img/icons.svg#icon-trending-up"></use>
                </svg>
              </div>
              <h5 className="features__header">Watch your money grow</h5>
              <p>
                Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                quibusdam!
              </p>
            </div>
            <img
              src="/img/grow-lazy.jpg"
              data-src="/img/grow.jpg"
              alt="Plant"
              className="features__img lazy-img"
            />

            <img
              src="/img/card-lazy.jpg"
              data-src="/img/card.jpg"
              alt="Credit card"
              className="features__img lazy-img"
            />
            <div className="features__feature">
              <div className="features__icon">
                <svg>
                  <use href="/img/icons.svg#icon-credit-card"></use>
                </svg>
              </div>
              <h5 className="features__header">Free debit card included</h5>
              <p>
                Quasi, fugit in cumque cupiditate reprehenderit debitis animi
                enim eveniet consequatur odit quam quos possimus assumenda dicta
                fuga inventore ab.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="section--2">
          <div className="section__title">
            <h2 className="section__description">Operations</h2>
            <h3 className="section__header">
              Everything as simple as possible, but no simpler.
            </h3>
          </div>

          <div className="operations">
            <div className="operations__tab-container">
              <button
                className="btn operations__tab operations__tab--1 operations__tab--active"
                data-tab="1"
              >
                <span>01</span>Instant Transfers
              </button>
              <button
                className="btn operations__tab operations__tab--2"
                data-tab="2"
              >
                <span>02</span>Instant Loans
              </button>
              <button
                className="btn operations__tab operations__tab--3"
                data-tab="3"
              >
                <span>03</span>Instant Closing
              </button>
            </div>
            <div className="operations__content operations__content--1 operations__content--active">
              <div className="operations__icon operations__icon--1">
                <svg>
                  <use href="/img/icons.svg#icon-upload"></use>
                </svg>
              </div>
              <h5 className="operations__header">
                Tranfser money to anyone, instantly! No fees, no BS.
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="operations__content operations__content--2">
              <div className="operations__icon operations__icon--2">
                <svg>
                  <use href="/img/icons.svg#icon-home"></use>
                </svg>
              </div>
              <h5 className="operations__header">
                Buy a home or make your dreams come true, with instant loans.
              </h5>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className="operations__content operations__content--3">
              <div className="operations__icon operations__icon--3">
                <svg>
                  <use href="/img/icons.svg#icon-user-x"></use>
                </svg>
              </div>
              <h5 className="operations__header">
                No longer need your account? No problem! Close it instantly.
              </h5>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="section--3">
          <div className="section__title section__title--testimonials">
            <h2 className="section__description">Not sure yet?</h2>
            <h3 className="section__header">
              Millions of Bankists are already making their lifes simpler.
            </h3>
          </div>

          <div className="slider">
            <div className="slide">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  Best financial decision ever!
                </h5>
                <blockquote className="testimonial__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium quas quisquam non? Quas voluptate nulla minima
                  deleniti optio ullam nesciunt, numquam corporis et asperiores
                  laboriosam sunt, praesentium suscipit blanditiis.
                  Necessitatibus id alias reiciendis, perferendis facere
                  pariatur dolore veniam autem esse non voluptatem saepe
                  provident nihil molestiae.
                </blockquote>
                <address className="testimonial__author">
                  <img
                    src="/img/user-1.jpg"
                    alt=""
                    className="testimonial__photo"
                  />
                  <h6 className="testimonial__name">Aarav Lynn</h6>
                  <p className="testimonial__location">San Francisco, USA</p>
                </address>
              </div>
            </div>

            <div className="slide">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  The last step to becoming a complete minimalist
                </h5>
                <blockquote className="testimonial__text">
                  Quisquam itaque deserunt ullam, quia ea repellendus provident,
                  ducimus neque ipsam modi voluptatibus doloremque, corrupti
                  laborum. Incidunt numquam perferendis veritatis neque
                  repellendus. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Illo deserunt exercitationem deleniti.
                </blockquote>
                <address className="testimonial__author">
                  <img
                    src="/img/user-2.jpg"
                    alt=""
                    className="testimonial__photo"
                  />
                  <h6 className="testimonial__name">Miyah Miles</h6>
                  <p className="testimonial__location">London, UK</p>
                </address>
              </div>
            </div>

            <div className="slide">
              <div className="testimonial">
                <h5 className="testimonial__header">
                  Finally free from old-school banks
                </h5>
                <blockquote className="testimonial__text">
                  Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                  incidunt commodi architecto numquam omnis nulla autem,
                  necessitatibus blanditiis modi similique quidem. Odio aliquam
                  culpa dicta beatae quod maiores ipsa minus consequatur error
                  sunt, deleniti saepe aliquid quos inventore sequi.
                  Necessitatibus id alias reiciendis, perferendis facere.
                </blockquote>
                <address className="testimonial__author">
                  <img
                    src="/img/user-3.jpg"
                    alt=""
                    className="testimonial__photo"
                  />
                  <h6 className="testimonial__name">Francisco Gomes</h6>
                  <p className="testimonial__location">Lisbon, Portugal</p>
                </address>
              </div>
            </div>

            <button className="slider__btn slider__btn--left">&larr;</button>
            <button className="slider__btn slider__btn--right">&rarr;</button>
            <div className="dots"></div>
          </div>
        </section>

        <section className="section section--sign-up">
          <div className="section__title">
            <h3 className="section__header">
              The best day to join Bankist was one year ago. The second best is
              today!
            </h3>
          </div>
          <button className="btn btn--show-modal">
            Open your free account today!
          </button>
        </section>

        <footer className="footer">
          <ul className="footer__nav">
            <li className="footer__item">
              <a className="footer__link" href="#">
                About
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Pricing
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Terms of Use
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Careers
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Blog
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <img src="/img/icon.png" alt="Logo" className="footer__logo" />
          <p className="footer__copyright">
            &copy; Copyright by
            <a
              className="footer__link twitter-link"
              target="_blank"
              href="https://twitter.com/@MdRagibHussai15"
            >
              Ragib Hussain
            </a>
            . Use for learning or your portfolio. Don't use to teach. Don't
            claim as your own product.
          </p>
        </footer>

        <div className={`modal ${this.state.modalVisibility}`} id="modal--1">
          <button
            className="btn--close-modal"
            onClick={() => {
              this.setState({ ...this.state, modalVisibility: "hidden" });
            }}
          >
            &times;
          </button>
          <h2 className="modal__header">
            Fill and mint your NFT <br />
            in just <span className="highlight">5 minutes</span>
          </h2>
          <form className="modal__form">
            <button
              className="btn"
              id="btn-login"
              onClick={() => {
                loginCall.login((ethAdd) => {
                  this.setState({ ...this.state, ethAdd: ethAdd });
                });
              }}
            >
              {this.state.ethAdd} &rarr;
            </button>
            <label>Organisation Name</label>
            <input
              type="text"
              value={this.state.orgName}
              onChange={(e) => {
                this.setState({ ...this.state, orgName: e.target.value });
              }}
            />
            <label>Recepeint Wallet Address</label>
            <input
              type="text"
              value={this.state.recp}
              onChange={(e) => {
                this.setState({ ...this.state, recp: e.target.value });
              }}
            />
            <label>Amount (NFT)</label>
            <input
              type="text"
              value={this.state.amount}
              onChange={(e) => {
                this.setState({ ...this.state, amount: e.target.value });
              }}
            />
            <label>Description</label>
            <input
              type="text"
              value={this.state.desc}
              onChange={(e) => {
                this.setState({ ...this.state, desc: e.target.value });
              }}
            />
            <label>Link to digital Art</label>
            <input
              type="text"
              value={this.state.art}
              onChange={(e) => {
                this.setState({ ...this.state, art: e.target.value });
              }}
            />
            <label>Recepient's Email</label>
            <input
              type="email"
              value={this.state.email}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ ...this.state, email: e.target.value });
              }}
            />
            <button
              className="btn"
              onClick={() => {
                nftStorageUtil.storeExampleNFT({ ...this.state });
              }}
            >
              Mint &rarr;
            </button>
            <button
              className="btn"
              onClick={() => {
                loginCall.logOut(() => {
                  this.setState({ ...this.state, ethAdd: "Connect Wallet" });
                });
              }}
            >
              LogOut &rarr;
            </button>
          </form>
        </div>

        <div className={`modal ${this.state.modal2Visibility}`} id="modal--1">
          <button
            className="btn--close-modal"
            onClick={() => {
              this.setState({ ...this.state, modal2Visibility: "hidden" });
            }}
          >
            &times;
          </button>
          <h2 className="modal__header">
            Fill and get your info <br />
            in just <span className="highlight">5 minutes</span>
          </h2>
          <form className="modal__form">
            <label>Token Id</label>
            <input
              type="text"
              value={this.state.tokenId}
              onChange={(e) => {
                this.setState({ ...this.state, tokenId: e.target.value });
              }}
            />
            <button
              className="btn"
              onClick={async () => {
                //this.setState.uri = await loginCall.getURI(this.state.tokenId);
                this.setState({
                  ...this.state,
                  uri: await loginCall.getURI(this.state.tokenId),
                  isURIAvail: true,
                });
              }}
            >
              Get URI &rarr;
            </button>
            {this.state.isURIAvail ? (
              <button hidden={this.state.isURIAvail} className="btn">
                {this.state.uri}|
                <button
                  className="btn"
                  style={{ backgroundColor: "white" }}
                  onClick={() => {
                    navigator.clipboard.writeText(this.state.uri);
                  }}
                >
                  Copy
                </button>
              </button>
            ) : (
              ""
            )}
          </form>
        </div>

        <div className="overlay hidden"></div>
      </div>
    );
  }
}
