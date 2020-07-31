import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';



export default class UserAlbumStats extends Component {
    render() {



        let tracks = this.props.tracks;


        const firstFive = tracks.slice(0, 5).map((item, key) =>

            <div class="col-sm">
                <h3 id="user_tracks_track_title" key={item.id}>{item.name}</h3>
                <h5 id="user_tracks_track_artist">{item.artists}</h5>
                <h5 id="user_tracks_track_album">{item.album}</h5>
            </div>
        );

        const secondFive = tracks.slice(6, 11).map((item, key) =>

            <div class="col-sm">
                <h3 id="user_tracks_track_title" key={item.id}>{item.name}</h3>
                <h5 id="user_tracks_track_artist">{item.artists}</h5>
                <h5 id="user_tracks_track_album">{item.album}</h5>
            </div>
        );

        return (
            <div className="section user_stats" id="userStats">
                <h1 id="user_stats_title">{this.props.currentuser}'s <br></br> Favorite Albums</h1>
                {tracks ?
                    <div>
                        <div class="container">
                            <div class="row">
                                {firstFive}

                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                {secondFive}
                            </div>
                        </div>



                    </div>
                    :
                    <div>'Loading...'
                    </div>

                }

            </div >

        )
    }










}






