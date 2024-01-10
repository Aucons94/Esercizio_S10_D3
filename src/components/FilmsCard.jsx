import { Component } from "react";
import { Col } from "react-bootstrap";

class FilmCard extends Component {
  state = {
    isCardHovered: false,
  };

  hoverCard = () => {
    this.setState({ isCardHovered: true });
  };

  exitCard = () => {
    this.setState({ isCardHovered: false });
  };

  render() {
    let movie = this.props.movie;
    let cardClass = "card-body";
    return (
      <Col xs={12} sm={6} md={4} xl={2}>
        <div className="card mb-2" onMouseEnter={this.hoverCard} onMouseLeave={this.exitCard}>
          <img className="cardDimension" src={movie.Poster} alt={movie.Title} />
          <div className={cardClass}>
            <div className="row">
              <div className="row">
                <div className="col-12">
                  <p className="text-white-50 h6">{movie.Title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default FilmCard;
