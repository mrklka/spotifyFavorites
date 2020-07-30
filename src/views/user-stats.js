import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';



export default class UserStats extends Component {
    render() {

        let artist = this.props.artists;
        console.log(artist)
        return (
            <div className="section user_stats" id="userStats">
                <h1 id="user_stats_title">{this.props.currentuser}'s <br></br> Favorite Artists</h1>
                {this.artist ?
                    <div>
                        <ul>
                            {
                                this.artist.map(artist =>
                                    <li>{artist.name}</li>

                                )
                            }
                        </ul>
                    </div>
                    :
                    <div>'Loading...'
                    </div>

                }
                <div className="container ">
                    <div className="row" id="user_stats_main_row" >
                        <div className="col" id="user_stats_main_column" >

                            <div className="container">
                                <div className="row">
                                    <div className="col-md">
                                        <h1 id="user_stats_artist_text">#1 Artist</h1>
                                        <img id="user_stats_favorite_img" alt="favorite artsts" src="exalb.jpg"></img>
                                        <h2 id="user_stats_artist_name">Artist</h2>

                                    </div>

                                    <div id="other_artist_col" className="col-md">
                                        <h1 id="user_stats_artist_text">Other Artists</h1>
                                        <div id="other_artist_container" className="row">
                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src="exalb.jpg"></img>
                                            <h2 id="user_stats_other_artist_name">Artist Name</h2>
                                        </div>
                                        <div id="other_artist_container" className="row">
                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src="exalb.jpg"></img>
                                            <h2 id="user_stats_other_artist_name">Artist Name</h2>
                                        </div>
                                        <div id="other_artist_container" className="row">
                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src="exalb.jpg"></img>
                                            <h2 id="user_stats_other_artist_name">Artist Name</h2>
                                        </div>
                                        <div id="other_artist_container" className="row">
                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src="exalb.jpg"></img>
                                            <h2 id="user_stats_other_artist_name">dasdasdasdasdasdadsasdasdas</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>
                </div>
            </div >

        )
    }










}






