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
            selectedGifId: this.selec,
        }
    }

    select = (selectedId) => {
        console.log(selectedId)
        this.setState({
            selectedGifId: selectedId
        });
    }

    search = (query) => {
        // implement search API call to giphy
        giphy('sxuQGRJfPwlnVUearMRBRbA48BnLHUwF').search({
            q: query,
            rating: 'g',
            limit: 12,
        }, (error, result) => {
            this.setState({
                gifs: result.data
            });
            // Res contains gif data!
            // console.log(result)
        });

    }

    render ( ) {


        return (
            <div>
                <div className='left-scene'>
                    <SearchBar search={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId} select={this.select}/>
                    </div>
                </div>
                <div className='right-scene'>
                    <GifList gifs = {this.state.gifs} select={this.select} />
                </div>
            </div>
        );
    }
}

export default App;
