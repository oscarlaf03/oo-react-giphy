import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick= () => {
    // console.log('clicked')
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render () {
    return (
      
      <div className={ this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick} > Hola {this.props.name} 
      Número de clicks: {this.state.counter} </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App name="Katita2000" />, root);
}


