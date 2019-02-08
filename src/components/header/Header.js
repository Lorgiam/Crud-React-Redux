import React, {Component} from "react";
import {Link} from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex'>
        <h1>
          <Link to={"/"} className='text-light'>
            CRUD - React, Redux, REST API & Axios
          </Link>
        </h1>
        <button type='button' className='btn btn-danger nuevo-post'>
          <Link to={"/productos/nuevo"}> Agregar Producto &#43;</Link>
        </button>
      </nav>
    );
  }
}
