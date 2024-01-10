import { Component } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-custom pt-5 ps-2 ps-md-0">
        <div className="container bg-custom text-white-50 h6">
          <div className="row">
            <div className="col pb-2 px-2 text-start">
              <button className="bg-custom text-white-50 border border-0 fs-4">
                <Facebook />
              </button>
              <button className="bg-custom text-white-50 border border-0 fs-4">
                <Instagram />
              </button>
              <button className="bg-custom text-white-50 border border-0 fs-4">
                <Twitter />
              </button>
              <button className="bg-custom text-white-50 border border-0 fs-4">
                <Youtube />
              </button>
            </div>
            <div className="row d-flex pb-2 text-start">
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#">Audio and Subtitles</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Media Center</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Privacy</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#">Audio Description</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Investor Relations</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Legal Notices</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#">Help Center</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Jobs</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Cookie Preferences</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="list-unstyled">
                  <li className="nav-footer">
                    <a href="#">Gift Cards</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Terms of Use</a>
                  </li>
                  <li className="nav-footer">
                    <a href="#">Corporate Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col">
                <button className="btn btn-outline-secondary rounded-0 text-white-50 h6">Service Code</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="copyright">
                  <span className="fs-5">©</span> 1997-2019 Netflix, Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
