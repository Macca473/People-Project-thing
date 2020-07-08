// import React from 'react';
 
function SortType() {

    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(json => {
        // this.setState({
        //     info: json.results,
        //     isLoaded: true,
        // })
        console.log(json)
    });
}

SortType()
 
export default App;