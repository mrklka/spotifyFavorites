import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div>

                <div className="jumbotron">
                    <h1 id="jumbotron_sublead" className="display-4">Welcome to</h1>
                    <h1 id="jumbotron_lead" className="display-4">my Spotify Favorites!</h1>
                    <p id="jumbotron_description" className="lead">View your favorite music and get recommendations!</p>
                    <p className="lead">
                        <button onClick={() =>
                            window.location = window.location.href.includes('localhost')
                                ? 'http://localhost:8888/login'
                                : 'https://better-playlists-backend.herokuapp.com/login'




                        } className="login-button" type="button">Log in with Spotify</button>


                    </p>
                    <span>
                        <a href="userStats" target="userStats">
                            <img id="proceed-botton" alt="proceed" src='down-btn.svg' />
                        </a>
                    </span>
                </div>

            </div>
        )
    }
}