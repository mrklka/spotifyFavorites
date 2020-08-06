import React, { Component } from 'react';
import qs from 'query-string';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';



export default class UserRecommendations extends Component {
    constructor() {
        super();

        this.state = {

            recommendations: [],
        }

    }



    componentDidUpdate() {

        let spotifyCallback = qs.parse(window.location.search)
        let accessToken = spotifyCallback.access_token

        if (this.state.recommendations.length < 1 || this.state.recommendations === undefined) {

            if (this.props.artists[0].id) {

                fetch(`https://api.spotify.com/v1/artists/${this.props.artists[0].id}/related-artists`, {
                    headers: { 'Authorization': 'Bearer ' + accessToken }
                }).then(response => response.json())
                    .then(data => this.setState({
                        recommendations: data.artists.map(item => {
                            return {
                                name: item.name,
                                imageUrl: item.images[0].url,
                                url: item.external_urls.spotify,
                                followers: item.followers
                            }
                        })
                    })).catch(err => console.log(err))

            }
        }
        console.log(this.state.recommendations)

    }

    render() {

        let artist = this.props.artists;

        return (
            <div className="section user_stats" id="userStats">
                <h1 id="user_stats_title">Your Recommendations</h1>

                {artist ?
                    <div>
                        <div name="rec" className="container ">
                            <div className="row" id="user_stats_main_row" >
                                <div className="col" id="user_stats_main_column" >

                                    <div className="container">
                                        <div className="row">
                                            {this.state.recommendations[0] ?
                                                <div id="rec_container" className="col-sm">
                                                    <a href={this.state.recommendations[0].url}>
                                                        <img id="user_recommendations_favorite_img" alt="favorite artsts" src={this.state.recommendations[0].imageUrl}></img>
                                                    </a>
                                                    <h2 id="user_recommendations_artist_name">{this.state.recommendations[0].name}</h2>
                                                </div>
                                                : ' '
                                            }


                                            {this.state.recommendations[1] ?
                                                <div id="rec_container" className="col-sm">
                                                    <a href={this.state.recommendations[1].url}>
                                                        <img id="user_recommendations_favorite_img" alt="favorite artsts" src={this.state.recommendations[1].imageUrl}></img>
                                                    </a>
                                                    <h2 id="user_recommendations_artist_name">{this.state.recommendations[1].name}</h2>
                                                </div> : ' '}
                                            {this.state.recommendations[2] ?
                                                <div id="rec_container" className="col-sm">
                                                    <a href={this.state.recommendations[2].url}>
                                                        <img id="user_recommendations_favorite_img" alt="favorite artsts" src={this.state.recommendations[2].imageUrl}></img>
                                                    </a>
                                                    <h2 id="user_recommendations_artist_name">{this.state.recommendations[2].name}</h2>
                                                </div> : ' '}
                                            {this.state.recommendations[3] ?
                                                <div id="rec_container" className="col-sm">
                                                    <a href={this.state.recommendations[3].url}>
                                                        <img id="user_recommendations_favorite_img" alt="favorite artsts" src={this.state.recommendations[3].imageUrl}></img>
                                                    </a>
                                                    <h2 id="user_recommendations_artist_name">{this.state.recommendations[3].name}</h2>
                                                </div> : ' '}
                                            {this.state.recommendations[4] ?
                                                <div id="rec_container" className="col-sm">
                                                    <a href={this.state.recommendations[4].url}>
                                                        <img id="user_recommendations_favorite_img" alt="favorite artsts" src={this.state.recommendations[4].imageUrl}></img>
                                                    </a>
                                                    <h2 id="user_recommendations_artist_name">{this.state.recommendations[4].name}</h2>
                                                </div> : ' '
                                            }
                                            {this.state.recommendations[5] ?
                                                <div id="rec_container" className="col-sm">
                                                    <a href={this.state.recommendations[5].url}>
                                                        <img id="user_recommendations_favorite_img" alt="favorite artsts" src={this.state.recommendations[5].imageUrl}></img>
                                                    </a>
                                                    <h2 id="user_recommendations_artist_name">{this.state.recommendations[5].name}</h2>
                                                </div> : ' '
                                            }

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






