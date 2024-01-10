import { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import MyNav from "./MyNav";

class Profile extends Component {
  render() {
    return (
      <>
        <div class="container bg-custom pt-5 text-white">
          <div class="row bg-custom justify-content-center">
            <div class="col-12 col-lg-6">
              <h1 class="display-1 marginAdj">Edit Profile</h1>
              <hr />
              <div class="row">
                <div class="col-12 col-md-3">
                  <img src=".\assets\images\avatar.png" alt="avatar" class="rounded img-fluid" />
                </div>
                <div class="col-12 col-md-8">
                  <input
                    class="form-control form-control-lg my-2 my-md-0 bg-secondary rounded-0"
                    type="text"
                    placeholder="Nickname"
                  />
                  <p class="h5 mt-md-4 text-white-50">Language:</p>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border border-white rounded-0">
                      English
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Italian</Dropdown.Item>
                      <Dropdown.Item href="#">French</Dropdown.Item>
                      <Dropdown.Item href="#">German</Dropdown.Item>
                      <Dropdown.Item href="#">Japanese</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <hr />
                  <p class="h5 mt-md-4 text-white-50">Maturity Settings:</p>
                  <div class="btn btn-secondary rounded text-white-50">
                    <p class="fw-bold m-0">ALL MATURITY SETTINGS</p>
                  </div>
                  <p class="my-3">Show titles of all maturity for this profile</p>
                  <button class="btn btn-outline-secondary rounded-0 text-white-50 button-edit">EDIT</button>
                  <hr />
                  <p class="h5 mt-md-4 text-white-50">Autoplay controls</p>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label extrasmall" for="flexCheckDefault">
                      Autoplay next episode in a series on all devices
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label extrasmall" for="flexCheckDefault">
                      Autoplay previews while browsing on all devices
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-between flex-wrap">
                <button class="btn btn-block btn-light rounded-0 text-black px-4 py-2 text-uppercase">Save</button>
                <button class="btn btn-block btn-outline-secondary rounded-0 text-white-50 px-4 py-2 text-uppercase">
                  Cancel
                </button>
                <button class="btn btn-block btn-outline-secondary rounded-0 text-white-50 px-5 py-2 text-uppercase">
                  Delete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
