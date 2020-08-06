import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';



export default class UserAlbumStats extends Component {
    render() {



        let tracks = this.props.tracks;


        const firstFive = tracks.slice(0, 5).map((item, key) =>

            <div key={key} id="user_tracks_track_container" className="col-sm">
                <img id="user_tracks_img" alt="favorite artsts" src='track_glyph.svg'></img>

                {
                    (item.name.length > 30) ? <h4 id="user_tracks_track_title" key={item.id}>{item.name.substring(0, 30)}...</h4>
                        : <h4 id="user_tracks_track_title" key={item.id}>{item.name}</h4>
                }

                <h5 id="user_tracks_track_artist">{item.artists}</h5>
                {
                    (item.album.length > 30) ? <h5 id="user_tracks_track_album">{item.album.substring(0, 30)}...</h5>
                        : <h5 id="user_tracks_track_album">{item.album}</h5>
                }

            </div>
        );

        const secondFive = tracks.slice(6, 11).map((item, key) =>

            <div key={key} id="user_tracks_track_container" className="col-sm">
                <img id="user_tracks_img" alt="favorite artsts" src='track_glyph.svg'></img>

                {
                    (item.name.length > 30) ? <h4 id="user_tracks_track_title" key={item.id}>{item.name.substring(0, 30)}...</h4>
                        : <h4 id="user_tracks_track_title" key={item.id}>{item.name}</h4>
                }

                <h5 id="user_tracks_track_artist">{item.artists}</h5>

                {
                    (item.album.length > 30) ? <h5 id="user_tracks_track_album">{item.album.substring(0, 30)}...</h5>
                        : <h5 id="user_tracks_track_album">{item.album}</h5>
                }


            </div>
        );

        return (
            <div className="section user_stats" id="userStats">
                <h1 id="user_stats_title">{this.props.currentuser}'s <br></br> Favorite Tracks</h1>
                {tracks ?
                    <div>
                        <div id="users_tracks_main_cont" className="container">
                            <div id="user_tracks_wrapper" className="row">
                                {firstFive}

                            </div>
                        </div>
                        <div id="users_tracks_main_cont" className="container">
                            <div id="user_tracks_wrapper" className="row">
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






