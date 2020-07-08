import React, { Component } from 'react';
import API from '../API/API.js'

let UsersAPI = API;
 
// function SortType(type) {


//     if (type === 1) {
        
//     }
// }

fetch

export const SortType = (type)=>{
    API.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
}

// SortType()
 
export default SortType();