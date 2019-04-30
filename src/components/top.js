import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Top extends Component{

  render(){
    return(
      <div>
        <Link to={'/users'}>ユーザー一覧</Link>
      </div>
    )
  }
}
