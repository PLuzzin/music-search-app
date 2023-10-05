// import logo from './logo.svg';
import "./assets/css/mdb.dark.min.css";
import "./App.css";
import "./global.css";


import { GoSearch } from 'react-icons/go';
import { GoHome } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';



function App() {
  
  return (
    <main>
      <header className="header-wrapper">
        <div className="search-wrapper input-group rounded">
          <input
            type="search"
            id="searchField"
            className="form-control rounded"
            placeholder="What do you want to listen to?"
          />
          <span className="input-group-text border-0" id="search-addon">
            <GoSearch className="svg-icons" />
          </span>
        </div>
        <div id="loginBtn" className="login-btn-wrapper">
          <button type="button" className="btn btn-link">
            Sign up
          </button>
          <button type="button" className="btn btn-link">
            Log in
          </button>
        </div>
      </header>

      <aside id="sidebar" className="sidebar">
        <div className="card-wrapper">
          <div id="leftNav" className="left-nav">
            <ul>
              <li>
                <a href="index.html" className="btn btn-link">
                  <GoHome className="svg-icons" />
                  <span className="ms-2">Home</span>
                </a>
              </li>
              <li>
                <a href="index.html" className="btn btn-link">
                  <GoSearch className="svg-icons" />
                  <span className="ms-2">Search</span>
                </a>
              </li>
              <li>
                <a href="favourites.html" className="btn btn-link">
                  <GoHeartFill className="svg-icons" />
                  <span className="ms-2">Your Favourites</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="FavouritesListLeft" className="card-wrapper mt-2">
          <div className="favourites-wrapper">
            <h6>Create your Favourites List</h6>
            <span>
              Add tracks to your favourites list by clicking on the{" "}
              <i className="far fa-heart"></i>
            </span>
          </div>
        </div>
      </aside>

      <article>
        <div id="ContentList" className="card-wrapper">
          <div className="content-title-wrapper">
              <h4>Playlist</h4>
              <div id="resultCount" className="ms-4"></div>
          </div>
          <div id="gridResults" className="grid-wrapper mt-3">
              
          </div>
          <div id="gridNoResults" className="grid-no-results mt-3">
              <h5>What do you want to listen to?</h5>
              <p>Search by artist name, track name or collection name.</p>
          </div>
        </div>
        <div id="results"></div>
      </article>

      <footer>
          <div className="card-wrapper">
              <div className="footer-wrapper">
                  <div className="text-center">
                      © 2023 Copyright - BoomBox
                  </div>
              </div>
          </div>
      </footer>
    </main>
  );
}

export default App;
