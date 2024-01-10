import { Component } from "react";
import { Grid, Grid3x3 } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import FilmsRow from "./FilmsRow";

class TvShows extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row py-4 px-2 d.flex justify-content-md-between bg-custom">
          <div className="col col-md-8 d-flex p-2 p-lg-0 justify-content-between justify-content-md-start align-items-center">
            <p className="h2 me-5 text-light">TV Shows</p>
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border border-white rounded-0">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Commedy</Dropdown.Item>
                <Dropdown.Item href="#">Adult</Dropdown.Item>
                <Dropdown.Item href="#">Adventures</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col col-md-4 d-flex  justify-content-md-end align-items-center d-none d-md-inline-flex">
            <button className="border border-white px-3 m-0 bg-custom text-light">
              <Grid className="pb-1 fs-5" />
            </button>
            <button className="border border-white px-3 m-0 bg-custom text-light">
              <Grid3x3 className="pb-1 fs-5" />
            </button>
          </div>
        </div>
        <FilmsRow query="star%20wars" />
        <FilmsRow query="harry%20potter" />
        <FilmsRow query="marvel" />
      </div>
    );
  }
}

export default TvShows;
