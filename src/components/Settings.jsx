import { Component } from "react";

import "../Settings.css";

class Settings extends Component {
  render() {
    return (
      <div class="bg-bianchissimo">
        <div class="account-page px-5">
          <div class="container p-5">
            <h3>Account</h3>
            <hr />

            <div class="row">
              <div class="col-md-3">
                <h6 class="text-muted">MEMBERSHIP & BILLING</h6>
                <button class="btn btn-membership">Cancel Membership</button>
              </div>
              <div class="col-md-9">
                <div class="d-flex align-items-center justify-content-between mt-2">
                  <strong>Epicoder1@gmail.com</strong>
                  <a class="text-primary">Change account email</a>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-2">
                  <span class="text-muted">Password : ********</span>
                  <a class="text-primary">Change password</a>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-2">
                  <span class="text-muted">Phone : 321 044 1279</span>
                  <a class="text-primary">Change phone number</a>
                </div>
                <hr />

                <div class="d-flex align-items-center justify-content-between mt-2">
                  <span>
                    <img src=".\assets\images\paypal_logo.png" width="80px" />
                    <strong class="ms-2">Epicoder1@gmail.com</strong>
                  </span>
                  <a class="text-primary">Update payment info</a>
                </div>
                <div class="d-flex align-items-center justify-content-end mt-2">
                  <a class="text-primary">Billing details</a>
                </div>
                <div class="d-flex align-items-center justify-content-end mt-2">
                  <a class="text-primary">Redeem giftcard or promo code</a>
                </div>
                <div class="d-flex align-items-center justify-content-end mt-2">
                  <a class="text-primary">Where to buy gift cards?</a>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-3">
                <h6 class="text-muted mb-0">PLAN DETAILS</h6>
              </div>
              <div class="col-md-9">
                <div class="d-flex align-items-center justify-content-between">
                  <span>
                    <strong>Standard</strong>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-badge-hd"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z" />
                      <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </span>
                  <a class="text-primary">Change plan</a>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-3">
                <h6 class="text-muted">SETTINGS</h6>
              </div>
              <div class="col-md-9">
                <p>
                  <a class="text-primary">Parent Controls</a>
                </p>
                <p>
                  <a class="text-primary">Test Participation</a>
                </p>
                <p>
                  <a class="text-primary">Manage downlaod devices</a>
                </p>
                <p>
                  <a class="text-primary">Activate a device</a>
                </p>
                <p>
                  <a class="text-primary">Recent device streaming activity</a>
                </p>
                <p>
                  <a class="text-primary">Signout all devices</a>
                </p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-3">
                <h6 class="text-muted">MY PROFILE</h6>
              </div>
              <div class="col-md-9">
                <div class="d-flex align-items-center justify-content-between mt-2">
                  <span>
                    <img src=".\assets\images\avatar.png" width="36px" />
                    <strong class="ms-2">Epicoder #1</strong>
                  </span>
                  <div class="d-flex flex-column">
                    <a class="text-primary">Manage profiles</a>
                    <a class="text-primary">Add profile email</a>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-4">
                    <p>
                      <a class="text-primary">Language</a>
                    </p>
                    <p>
                      <a class="text-primary">Playback settings</a>
                    </p>
                    <p>
                      <a class="text-primary">Subtitle appearence</a>
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p>
                      <a class="text-primary">Viewing activity</a>
                    </p>
                    <p>
                      <a class="text-primary">Ratings</a>
                    </p>
                  </div>
                  <div class="col-md-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
