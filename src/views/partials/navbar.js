import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar ">
                    {/* <a class="navbar-brand navbar-text justify-content-center" id="navbar-text" href="# ">
                        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img> */}
                    <p id="navbar-text">My Spotify Favorites</p>
                    {/* </a> */}
                </nav>

            </div>
        )
    }
}