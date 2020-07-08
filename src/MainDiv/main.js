import React, { Component } from 'react';
import {SortType} from '../SortFun/sorttypefunction.js'
import {API} from '../API/API.js'
import "./main-style.css"

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: [],
      isLoaded: false,
      search: ''
      }
    }

    componentDidMount(){

      fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(json => {
            this.setState({
                info: json.results,
                isLoaded: true,
            })
        });
    }

    render() {

      let { isLoaded, info, search} = this.state;

      

      if (!isLoaded) {
        return <div>Loading...</div>;
      }

      else {

        return (
                <div>
                    <div className="topheader">
                        List of employees
                    </div>
                    <div className="topheader">
                        <input  type="text" value={search}></input>
                    </div>
                    <div className="emlist testborder">
                          <div className="column testborder titleButtons">Name</div>
                          <div className="column testborder titleButtons">Email</div>
                          <div className="column testborder titleButtons">Date of birth</div>
                        </div>
                    <div className="emlist">
                    {

                        info.SortType(1)
                     
                        .map(data => 
                        
                              <div className="testborder">
                                <img className="image" src={data.picture.thumbnail}></img>
                                <div className="column testborder">{data.name.first} {data.name.last}</div>
                                <div className="column testborder">{data.email}</div>
                                <div className="column testborder">{data.dob.date.slice(0,10)}</div>
                              </div>
                            
                            )
                    }
                    </div>
                </div>
        );

      }
    }
  }

export default Main;


// const { useEffect } = require("react");


// function Search() {
//     const [firstname, setName] = useState("FirstName");
//     const [lastname, setLName] = useState("LastName");
//     const [age, setAge] = useState("Age");

//     useEffect(() => {
//         API.setName(firstname)
//         .then(res => {
//             if (res.data.length ===0) {
//                 throw new Error("No result found")
//             }
//             set
//         })
//     }
//     return (

//     )
// }