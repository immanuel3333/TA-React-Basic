// eslint-disable-next-line

import { Component } from "react";
import movieList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {movieList.map((e) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <MovieCard movie={e} key={e.mal_id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
