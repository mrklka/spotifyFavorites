import React, { Component } from 'react';
import './App.css';
import qs from 'query-string';

import Navbar from "../src/views/partials/navbar"
import Jumbotron from "../src/views/partials/main-jumbotron"
import UserStats from "../src/views/user-stats"
import UserAlbumStats from "../src/views/user-stats-albums"


class App extends Component {

  constructor() {
    super();

    this.state = {
      userData: {},
      filterString: '',
      artists: [],
      tracks: []
    }


  }



  componentDidMount() {

    let spotifyCallback = qs.parse(window.location.search)
    let accessToken = spotifyCallback.access_token



    fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => this.setState({
        user: {
          name: data.display_name
        }
      }))


    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => this.setState({
        artists: data.items.map(item => {
          return {
            name: item.name,
            imageUrl: item.images[0].url,
            url: item.external_urls.spotify,
            genre: item.genres[0]
          }
        })
      })).catch(err => console.log(err))

    fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => this.setState({
        tracks: data.items.map(item => {
          return {
            name: item.name,
            album: item.album.name,
            artists: item.artists[0].name,
            url: item.external_urls.spotify,
          }
        })
      })).catch(err => console.log(err))
  }




  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
        <Navbar />
        <Jumbotron />

        {
          this.state.user ?
            <div>
              <UserStats currentuser={this.state.user.name} artists={this.state.artists} />
              <UserAlbumStats currentuser={this.state.user.name} tracks={this.state.tracks} />
            </div>







            :
            <h1>Loading...</h1>
        }




      </div>
    );
  }
}
export default App;
