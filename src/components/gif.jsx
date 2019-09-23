import React, { Component } from 'react';

class Gif extends Component {
    handleClick = (event) => {
        // console.log(this);
        this.props.select(this.props.id);
    }
    render () {

        if(!this.props.id) {
            return null;
        }
        const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
        return(
            <img onClick={this.handleClick}  src= {src} alt="" className="gif" />   
        );
    }
}
export default Gif;
