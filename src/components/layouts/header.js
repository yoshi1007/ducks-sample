import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{
  render(){
    return(
      <div className="header">
        <h1>header</h1>
        <ul className="header-contents">
          <li><Link to={"/"}>トップ</Link></li>
          <li><Link to={"/users"}>ユーザー一覧</Link></li>
        </ul>
      </div>
    )
  }
}
