import React, { Component } from "react";
export class MovieDetailsSecond extends Component {
  constructor() {
    super();
    this.state = {
      movieFound: false,
      movieDetails: [],
    };
    this.searchMovie = this.searchMovie.bind(this);
  }
  componentWillMount() {
    this.setState({
      movieDetails: this.props.details,
    });
  }
  searchMovie = (e) => {
    const { movieFound, movieDetails } = this.state;
    if (e.target.value.trim() != "") {
      var a = e.target.value;
      if (movieDetails.Title.toUpperCase().search(a.toUpperCase()) >= 0) {
        this.setState({ movieFound: true });
      } else if (movieDetails.Year == a) {
        this.setState({ movieFound: true });
      } else {
        this.setState({ movieFound: false });
      }
    } else {
      this.setState({ movieFound: false });
    }
  };
  render() {
    const { movieFound, movieDetails } = this.state;
    return (
      <div>
        <div>
          <div className="col s12">
            <div className="row">
              <div className="input-field col s4 movieSearchFirst">
                <input
                  id="movieTitle"
                  type="text"
                  onChange={this.searchMovie}
                />
                <label>Movie title OR Release year</label>
              </div>
              {movieFound ? (
                <div className="row">
                  <div className="col s2">
                    <div className="card">
                      <div className="card-image">
                        <img src={movieDetails.Poster} />
                      </div>
                      <div className="card-content">
                        <ul>
                          <li>{movieDetails.Actor}</li>
                          <li>{movieDetails.Director}</li>
                          <li>{movieDetails.Year}</li>
                        </ul>
                      </div>
                      <div className="card-action">
                        <label>{movieDetails.Title}</label>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h3>No Record Found</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
