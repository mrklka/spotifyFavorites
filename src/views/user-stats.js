import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';



export default class UserStats extends Component {
    render() {

        let artist = this.props.artists;
        return (
            <div name="artist" className="section user_stats" id="userStats">
                <h1 id="user_stats_title">{this.props.currentuser}'s <br></br> Favorite Artists</h1>
                {artist ?
                    <div>
                        <div className="container ">
                            <div className="row" id="user_stats_main_row" >
                                <div className="col" id="user_stats_main_column" >

                                    <div className="container">
                                        <div className="row">
                                            {artist[0] ?
                                                <div className="col-md">
                                                    <h1 id="user_stats_artist_text">#1 Artist</h1>
                                                    <a href={artist[0].url}>
                                                        <img id="user_stats_favorite_img" alt="favorite artsts" src={artist[0].imageUrl}></img>
                                                    </a>
                                                    <h2 id="user_stats_artist_name">{artist[0].name}</h2>
                                                </div>
                                                : ' '}


                                            <div id="other_artist_col" className="col-md">
                                                <h1 id="user_stats_artist_text">Other Artists</h1>
                                                {artist[1] ?
                                                    <a href={artist[1].url}>
                                                        <div id="other_artist_container" className="row">
                                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src={artist[1].imageUrl}></img>
                                                            <h2 id="user_stats_other_artist_name">{artist[1].name}</h2>
                                                        </div>
                                                    </a>
                                                    : ' '}
                                                {artist[2] ?
                                                    <a href={artist[2].url}>
                                                        <div id="other_artist_container" className="row">
                                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src={artist[2].imageUrl}></img>
                                                            <h2 id="user_stats_other_artist_name">{artist[2].name}</h2>
                                                        </div>
                                                    </a>
                                                    : ' '}
                                                {artist[3] ?
                                                    <a href={artist[3].url}>
                                                        <div id="other_artist_container" className="row">
                                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src={artist[3].imageUrl}></img>
                                                            <h2 id="user_stats_other_artist_name">{artist[3].name}</h2>
                                                        </div>
                                                    </a>
                                                    : ' '}
                                                {artist[4] ?
                                                    <a href={artist[3].url}>
                                                        <div id="other_artist_container" className="row">
                                                            <img id="user_stats_other_artist_img" alt="favorite artsts" src={artist[4].imageUrl}></img>
                                                            <h2 id="user_stats_other_artist_name">{artist[4].name}</h2>
                                                        </div>
                                                    </a>
                                                    : ' '}

                                            </div>

                                        </div>


                                    </div>


                                </div>



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






