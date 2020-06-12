import React, { Component } from "react";
import { Modal, Button } from "react-materialize";

export class MovieDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      movieDetails: [],
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose = () => {
    debugger;
    this.setState({ showModal: false });
    this.props.handler();
  };
  componentWillMount() {
    debugger;
    if (this.props.details != undefined) {
      this.setState({
        movieDetails: this.props.details,
      });
    }
  }
  render() {
    const { movieDetails } = this.state;
    return (
      <div>
        {movieDetails != undefined && (
          <Modal
            actions={[
              <Button
                flat
                className="#e57373 red lighten-2"
                onClick={this.handleClose}
              >
                Close
              </Button>,
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header={movieDetails.Title}
            id="modal1"
            open={this.state.showModal}
            options={{
              inDuration: 250,
              opacity: 0.5,
              outDuration: 250,
              preventScrolling: true,
              startingTop: "6%",
              dismissible: false,
            }}
            className="modal"
          >
            <div className="col s12">
              <div className="row">
                <div className="col s6">
                  <ul>
                    <li>
                      <label className="displayMovieListModal">Title : </label>
                      <label>{movieDetails.Title}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">
                        imdbRating :
                      </label>
                      <label className="imdbRating">
                        {movieDetails.imdbRating}
                      </label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">Actors :</label>
                      <label>{movieDetails.Actors}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">
                        Director :
                      </label>
                      <label>{movieDetails.Director}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">Country :</label>
                      <label>{movieDetails.Country}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">Awards :</label>
                      <label>{movieDetails.Awards}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">Genre :</label>
                      <label>{movieDetails.Genre}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">
                        Language :
                      </label>
                      <label>{movieDetails.Language}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">
                        Production :
                      </label>
                      <label>{movieDetails.Production}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">
                        Released :
                      </label>
                      <label>{movieDetails.Released}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">Runtime :</label>
                      <label>{movieDetails.Runtime}</label>
                    </li>
                  </ul>
                </div>
                <div className="col s6">
                  <ul>
                    <li>
                      <label className="displayMovieListModal">Writer :</label>
                      <label>{movieDetails.Writer}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">Year :</label>
                      <label>{movieDetails.Year}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">Plot :</label>
                      <label>{movieDetails.Plot}</label>
                    </li>
                    <li>
                      <label className="displayMovieListModal">
                        boxoffice :
                      </label>
                      {parseFloat(movieDetails.imdbRating) > 7 ? (
                        <label className="displayMovieListModal">hit</label>
                      ) : (
                        <label className="displayMovieListModal">flop</label>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
