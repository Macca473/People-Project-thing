import React, {Component} from 'react';

// let API

// APIfun = ()=>{

//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json)
//     .then(json => {
//      API = json
//     })
// }

// export {API}

export default class API extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: [],
      }
    }

  componentDidMount(){

    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(json => {
          this.setState({
              info: json.results,
          })
      });
  }
}
