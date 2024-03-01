import React, { useState } from "react";
import "./style.css";
import card1 from "../assets/images/image 199.png";
import card2 from "../assets/images/image 200.png";
import card3 from "../assets/images/image 201.png";
import card4 from "../assets/images/image 202.png";
import { FiArrowRight } from "react-icons/fi";
import axios from "axios";

const Template = () => {
  const [email,setEmail] = useState("");
  const subscribeNewsLetter = () => {
    axios.post("http://localhost:3600/add-subscriber",{
      email
    })
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        setEmail("");
      }
    })
  }
  return (
    <div>
      {/* header */}
      <div className="container d-flex justify-content-between p-4">
        <div className="mt-2 ">
          <h4 className="fst-italic fs-2">
            XYZ <span className="fw-light">INDUSTRIES</span>
          </h4>
        </div>
        <div
          className="common-dark-blue d-flex justify-content-between py-3 px-4  "
          style={{ borderRadius: "30px" }}
        >
          <div className="mx-2">
            <span className="hover-color">Home</span>
          </div>
          <div className="mx-2">
            <span className="hover-color">About Us</span>
          </div>
          <div className="mx-2">
            <span className="hover-color">Property</span>
          </div>
          <div className="mx-2">
            <span className="hover-color">Services</span>
          </div>
          <div className="mx-2">
            <span className="hover-color">Contact</span>
          </div>
        </div>
        <div className="">
          <div className="d-flex mt-1">
            <button
              className="btn btn-light py-2 px-3 me-2 border-dark"
              style={{ borderRadius: "20px " }}
            >
              Sign Up
            </button>
            <button
              className="btn btn-primary py-2 px-3 border-ligth"
              style={{ borderRadius: "20px " }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* heading line 1 */}
      <div className="container text-center mb-5 mt-4">
        <div
          className="common-dark-blue-text lh-2"
          style={{ fontSize: "70px ", fontWeight: "620" }}
        >
          CONNECTING DREAMS TO REALITY
        </div>
        <div
          className="common-dark-skyblue-text fst-italic lh-2"
          style={{ fontSize: "70px ", fontWeight: "620" }}
        >
          YOUR PREMIER
        </div>
        <div
          className="common-dark-blue-text lh-2"
          style={{ fontSize: "70px ", fontWeight: "620" }}
        >
          REAL ESTATE MARKETPLACE
        </div>
        <div className="mt-3 fw-normal" style={{ fontSize: "20px" }}>
          Where every search ends with a home
        </div>
        <div className="d-flex justify-content-around ">
        <div className="btn-customise d-flex justify-content-center">
              <span className="align-self-center text-light fw-normal hover-color">
                Find Your Home <FiArrowRight />{" "}
              </span>
        </div>
        <div className="btn-customise d-flex justify-content-center">
              <span className="align-self-center text-light fw-normal hover-color">
                List Your Property <FiArrowRight />{" "}
              </span>
        </div>
        </div>
      </div>
      
      {/* middle image 1 */}
      <div className="p-0 w-100">
        {/* <div className="background-one"></div> */}
        <div className="background-two"></div>
      </div>
      {/* headning line 2 */}
      <div className="container text-center mt-4 p-4" style={{ gap: "24px" }}>
        <div
          className="common-dark-blue-text fw-bolder lh-2"
          style={{ fontSize: "72px" }}
        >
          HOW IT WORKS?
        </div>
        <div className="mt-3 fw-normal" style={{ fontSize: "20px"}}>
          Step by Step Guide
        </div>
      </div>
      {/* cards */}
      <div className="container ">
        <div className="row">
          {/* card 1 */}
          <div className="col-12 d-flex justify-content-start mb-5">
            <div className="d-flex">
              <img className="card-length" src={card1} alt="no image" />
              <div className="d-flex flex-row-reverse p-5">
                <div className="ms-2 align-self-center">
                  <div className="card-heading">Discover Your Perfect Home</div>
                  <div className="card-description mt-3">
                    Use our advanced filters to narrow down your search. Specify
                    everything from location to amenities, ensuring you find the
                    property that feels right.
                  </div>
                  <p className="fs-5 text-decoration-underline card-more-btn mt-1">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="col-12 d-flex justify-content-end mb-5">
            <div className="d-flex">
              <div className="d-flex flex-row-reverse text-end p-5">
                <div className="ms-2 align-self-center">
                  <div className="card-heading">Showcase Your Property</div>
                  <div className="card-description mt-3">
                    List your property with ease. Fill in detailed forms to
                    highlight every feature, attracting the perfect buyer
                    directly.
                  </div>
                  <p className="fs-5 text-decoration-underline card-more-btn mt-1">
                    Learn More
                  </p>
                </div>
              </div>
              <img className="card-length" src={card2} alt="no image" />
            </div>
          </div>
          {/* card 3 */}
          <div className="col-12 d-flex justify-content-start mb-5">
            <div className="d-flex">
              <img className="card-length" src={card3} alt="no image" />
              <div className="d-flex flex-row-reverse p-5">
                <div className="ms-2 align-self-center">
                  <div className="card-heading">Connect and Communicate</div>
                  <div className="card-description mt-3">
                    Our platform facilitates direct communication between buyer
                    and seller, making negotiations transparent and
                    straightforward.
                  </div>
                  <p className="fs-5 text-decoration-underline card-more-btn mt-1">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="col-12 d-flex justify-content-end mb-5">
            <div className="d-flex">
              <div className="d-flex flex-row-reverse text-end p-5">
                <div className="ms-2 align-self-center">
                  <div className="card-heading">Seal the Deal Securely</div>
                  <div className="card-description mt-3">
                    Advance payments made safe. Secure your agreement with
                    confidence, and step closer to your dream property.
                  </div>
                  <p className="fs-5 text-decoration-underline card-more-btn mt-1">
                    Learn More
                  </p>
                </div>
              </div>
              <img className="card-length" src={card4} alt="no image" />
            </div>
          </div>
        </div>
      </div>
      {/* why choose xyz banner */}
      <div className="w-100 banner-color-custom mb-5 p-5">
        <div
          className="common-dark-blue-text lh-2 d-flex justify-content-center"
          style={{ fontSize: "72px ", fontWeight: "700" }}
        >
          WHY CHOOSE XYZ?
        </div>
        <div className="container">
          <div className="row mt-4" style={{ height: "650px" }}>
            <div className="col-3 h-100 d-flex">
              <div className="custom-border p-3 align-self-start">
                <div className="digit-custom">01</div>
                <div className="text-uppercase card-custom-heading">
                  Search and Filters
                </div>
                <div className="custom-box my-4"></div>
                <div className="card-custom-text">
                  Tailored Searches to meet your needs. Find what you’re looking
                  for with precision.
                </div>
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className="custom-border p-3 align-self-center">
                <div className="digit-custom">02</div>
                <div className="text-uppercase card-custom-heading">
                  Detailed Listings
                </div>
                <div className="custom-box my-4"></div>
                <div className="card-custom-text">
                  Every Detail Matters. Sellers can list, and buyers can explore
                  properties that meet their exact specifications.
                </div>
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className="custom-border p-3 align-self-end">
                <div className="digit-custom">03</div>
                <div className="text-uppercase card-custom-heading">
                  Direct Messaging
                </div>
                <div className="custom-box my-4"></div>
                <div className="card-custom-text">
                  Seamless Communication. Connect directly with sellers or
                  buyers to ask questions, negotiate, and make decisions.
                </div>
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className="custom-border p-3 align-self-center">
                <div className="digit-custom">04</div>
                <div className="text-uppercase card-custom-heading">
                  Secure Payments
                </div>
                <div className="custom-box my-4"></div>
                <div className="card-custom-text">
                  Trust in Every Transaction. Our secure payment system ensures
                  your peace fo mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  banner image 2 */}
      <div className="w-100 position-relative">
        <div className="banner-container-one"></div>
        <div className="banner-container-two"></div>
        <div className="text-center position-absolute top-0 p-5">
          <div
            className="common-dark-blue-text lh-2 mt-4"
            style={{ fontSize: "72px ", fontWeight: "700" }}
          >
            YOUR <span className="fw-normal fst-italic"> TRUSTED</span> PARTNER
            IN
          </div>
          <div
            className="common-dark-blue-text lh-2"
            style={{ fontSize: "72px ", fontWeight: "700" }}
          >
            THE FUTURE <span className="fw-normal fst-italic">OF HOUSING</span>
          </div>
          <div className="d-flex justify-content-center w-100">
            <div className="mt-3 fw-normal w-75" style={{ fontSize: "20px" }}>
              Our partnerships with governments and local banks ensure that our
              housing prices are affordable enough for our target market.
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div className="btn-customise d-flex justify-content-center">
              <span className="align-self-center text-light fw-normal hover-color">
                Join Our community Today <FiArrowRight />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer common-dark-blue mt-5">
        <div className="container px-3 py-5 border-1 border-bottom">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="footer-Heading-text text-light">
                XYZ <span className="fw-light fst-italic">INDUSTRIES</span>
              </div>
              <div className="footer-text mt-4">
                XYZ Industries: Where real estate dreams meet seamless
                transactions, transforming aspirations into achievements.
              </div>
              <div className="footer-button d-flex justify-content-center mt-5">
                <span className="align-self-center"> EXPLORE</span>
              </div>
            </div>
            <div className="col-12 col-md-2 text-light mt-3">
              <div className="footer-text fw-normal fs-5">Quick Links</div>
              <ol className="list-unstyled">
                <li className="lh-3 mt-3">About Us</li>
                <li className="lh-3 mt-2">Blog</li>
                <li className="lh-3 mt-2">Testimonials</li>
                <li className="lh-3 mt-2">Terms and Conditions</li>
                <li className="lh-3 mt-2">Privacy Policy</li>
                <li className="lh-3 mt-2">Site Map</li>
              </ol>
            </div>
            <div className="col-12 col-md-2 mt-3">
              <div className="footer-text fw-normal fs-5">Customer Support</div>
              <ol className="list-unstyled">
                <li className="lh-3 mt-3">Feedback</li>
                <li className="lh-3 mt-2">Report a Problem</li>
                <li className="lh-3 mt-2">Request a Call Back</li>
              </ol>
            </div>
            <div className="col-12 col-md-4 mt-3">
              <div className="footer-text fw-normal fs-5">Subscribe Us</div>
              <ol className="list-unstyled">
                <li className="lh-3 mt-3">
                  Subscribe to our weekly newsletter
                </li>
              </ol>
              <div>
                <input
                  type="email"
                  className="custom-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="text-center d-flex justify-content-center submit-btn mt-3" onClick={() => subscribeNewsLetter()}>
                  <span className="align-self-center">Subscribe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="container d-flex justify-content-between pb-5">
            <div>
              <i className="bi bi-youtube m-2" style={{ fontSize: "22px" }}></i>
              <i className="bi bi-twitter m-2" style={{ fontSize: "22px" }}></i>
              <i
                className="bi bi-instagram m-2"
                style={{ fontSize: "22px" }}
              ></i>
              <i
                className="bi bi-facebook m-2"
                style={{ fontSize: "22px" }}
              ></i>
            </div>
            <div>
              <span>Terms | Privacy</span>{" "}
              <span className="ms-5">© 2024 XYZ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;

// https://www.figma.com/file/zgE9EKt58r4Fxk4tTpJCTj/Assignment-(MERN-Stack---27-Feb-2024)?type=design&node-id=1-41&mode=design&t=eipofcc79ChzVE1d-0
