import React, { Component } from "react";
import axios from "axios";
import { MovieDetailsModal } from "./MovieDetailsModal";
import Pagination from "react-js-pagination";
import { MovieDetailsSecond } from "../MovieDetailsSecond/MovieDetailsSecond";

export class MovieDetailsFirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieFound: false,
      movieDetails: [],
      showModel: false,
      firstNavClick: true,
      secondNav: false,
    };
    this.getMoviesDetails = this.getMoviesDetails.bind(this);
    this.displayMoreDetails = this.displayMoreDetails.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.changePagination = this.changePagination.bind(this);
    this.clickMovieDetails = this.clickMovieDetails.bind(this);
  }
  displayMoreDetails = () => {
    this.setState({ showModel: true });
  };
  componentDidMount() {
    this.getMoviesDetails();
  }
  clickMovieDetails = (event) => {
    if (event.target.text == "Movie Details") {
      this.setState({
        firstNavClick: true,
        secondNav: false,
      });
    } else if (event.target.text == "Movie details poster") {
      this.setState({
        secondNav: true,
        firstNavClick: false,
      });
    } else {
      this.setState({
        firstNavClick: true,
      });
    }
  };
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
  getMoviesDetails = () => {
    try {
      axios({
        method: "post",
        url: "http://www.omdbapi.com/?i=tt3896198&apikey=970934ef",
      })
        .then((response) => {
          if (response.status == 200) {
            this.setState({
              movieDetailsClick: true,
              movieDetails: response.data,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  changePagination = () => {
    alert("Change page");
  };
  handleClose = () => this.setState({ showModel: false });
  render() {
    const {
      movieDetails,
      showModel,
      movieFound,
      firstNavClick,
      secondNav,
    } = this.state;
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul className="tabs nav-wrapper">
              <li className="tab col s3">
                <a
                  className="active"
                  href="#"
                  value="movieDetails"
                  onClick={this.clickMovieDetails}
                >
                  Movie Details
                </a>
              </li>
              <li className="tab col s3">
                <a
                  className="active"
                  href="#"
                  value="posterDetails"
                  onClick={this.clickMovieDetails}
                >
                  Movie details poster
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {firstNavClick && (
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
              </div>
            </div>
            {movieFound ? (
              <div className="col s10">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Actors</th>
                      <th>Director</th>
                      <th>Country</th>
                      <th>Awards</th>
                      <th>More Info..</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{movieDetails.Title}</td>
                      <td>{movieDetails.Actors}</td>
                      <td>{movieDetails.Director}</td>
                      <td>{movieDetails.Country}</td>
                      <td>{movieDetails.Awards}</td>
                      <td>
                        <button
                          className="waves-effect waves-light btn-small #546e7a blue-grey darken-1"
                          onClick={() => this.displayMoreDetails()}
                        >
                          More Info...
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Pagination
                  hideFirstLastPages
                  pageRangeDisplayed={10}
                  activePage={1}
                  itemsCountPerPage={10}
                  totalItemsCount={1}
                  onChange={() => this.changePagination()}
                />
              </div>
            ) : (
              <h3>No Record Found</h3>
            )}
          </div>
        )}
        {secondNav && (
          <MovieDetailsSecond details={movieDetails}></MovieDetailsSecond>
        )}
        <div>
          {showModel && (
            <MovieDetailsModal
              details={movieDetails}
              handler={() => this.handleClose()}
            ></MovieDetailsModal>
          )}
        </div>
      </div>
    );
  }
}
