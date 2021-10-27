import React, { Component } from 'react';
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



export default class kekambas extends Component {
  constructor(props){
    super(props);
    this.state = {
        posts: []
    }
}

  componentDidMount(){
    fetch('https://kekambas-bs.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                posts: data
            })
        }
    )
}
render() {
  return (
    <div>
      <h1 className='text-center'>Posts</h1>
        <ul className='list-group'>
            {this.state.posts.map((user, idx) => <li key={idx} className='list-group-item'>{user.first_name} {user.last_name}</li>)}
        </ul>
    </div>
  )
}
}


