import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';


class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            gifs: [],
            selectedGifId: "1hqYk0leUMddBBkAM7",
        }

    }

    search = (query) => {
        // implement search API call to giphy
        giphy('sxuQGRJfPwlnVUearMRBRbA48BnLHUwF').search({
            q: query,
            rating: 'r',
            limit: 12,
        }, (error, result) => {
            this.setState({
                gifs: result.data
            });
            // Res contains gif data!
            console.log(result)
        });

    }

    render ( ) {
        return (
            <div>
                <div className='left-scene'>
                    <SearchBar search={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId}/>
                    </div>
                </div>
                <div className='right-scene'>
                    <GifList gifs = {this.state.gifs} />
                </div>
            </div>
        );
    }
}

export default App;
