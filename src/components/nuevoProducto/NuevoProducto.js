import React, {Component} from "react";
import Error from "../error/Error";

//redux
import {connect} from "react-redux";

//actions
import {agregarProducto} from "../../actions/productosActions";

class NuevoProducto extends Component {
  state = {
    nombre: "",
    precio: "",
    error: false
  };

  nombreProducto = e => {
    console.log("====================================");
    console.log(e.target.value);
    console.log("====================================");
    this.setState({
      nombre: e.target.value
    });
  };
  precioProducto = e => {
    console.log("====================================");
    console.log(e.target.value);
    console.log("====================================");
    this.setState({
      precio: e.target.value
    });
  };

  agregarProducto = e => {
    e.preventDefault();

    //validar formulario
    if (this.state.precio === "" || this.state.nombre === "") {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false
      });
    }

    //objeto producto
    const producto = {
        nombre : this.state.nombre,
        precio:this.state.precio
    }

    //action(agregando producto)
    this.props.agregarProducto(producto);
    //limpiando formulario
    e.target.reset();
  };

  render() {
    const error = this.state.error;
    return (
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center'>Agregar Nuevo Producto</h2>
              <form onSubmit={this.agregarProducto}>
                <div className='form-group'>
                  <label>Titulo</label>
                  <input
                    onChange={this.nombreProducto}
                    type='text'
                    className='form-control'
                    placeholder='Titulo'
                  />
                </div>
                <div className='form-group'>
                  <label>Precio del Producto</label>
                  <input
                    onChange={this.precioProducto}
                    type='text'
                    className='form-control'
                    placeholder='Precio'
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                  Agregar
                </button>
                {error === true ? <Error error='Todos los campos son obligatorios' /> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {agregarProducto}
)(NuevoProducto);
