import React, { Component } from 'react'

export default class kekambasposts extends Component {
  render() {
    const posters = this.props.posts
    return (
     
    )
  }
}

    render() {
        const racer = this.props.racer
        return (
          <div>
        Hello Kekambas posters
          <tr>
                <td>{posters.first_name}</td>
                <td>{posters.last_name}</td>
          </tr>
      </div>
        )
    }