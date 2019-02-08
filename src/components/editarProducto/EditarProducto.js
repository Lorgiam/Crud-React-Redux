import React, {Component} from "react";
import Error from "../error/Error";

//redux
import {connect} from "react-redux";

//actions
import {mostrarProducto, editarProducto} from "../../actions/productosActions";

class EditarProducto extends Component {
  state = {
    nombre: "",
    precio: "",
    error: false
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.mostrarProducto(id);
  }
  componentWillReceiveProps(nextProps, nextState) {
    const {nombre, precio, id} = nextProps.producto;
    this.setState({
      nombre,
      precio
    });
  }

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

  editarProducto = e => {
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

      //objeto producto
      const producto = {
        nombre: this.state.nombre,
        precio: this.state.precio,
        id: this.props.match.params.id
      };

      //action(agregando producto)
      this.props.editarProducto(producto);
      //limpiando formulario
      this.props.history.push("/");
    }
  };

  render() {
    const {nombre, precio, error} = this.state;
    return (
      <div className='row justify-content-center mt-5'>
        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              <h2 className='text-center'>Agregar Nuevo Producto</h2>
              <form onSubmit={this.editarProducto}>
                <div className='form-group'>
                  <label>Titulo</label>
                  <input
                    defaultValue={nombre}
                    onChange={this.nombreProducto}
                    type='text'
                    className='form-control'
                    placeholder='Titulo'
                  />
                </div>
                <div className='form-group'>
                  <label>Precio del Producto</label>
                  <input
                    defaultValue={precio}
                    onChange={this.precioProducto}
                    type='text'
                    className='form-control'
                    placeholder='Precio'
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                  Editar
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
const mapStateToProps = state => ({
  producto: state.productos.producto
});
export default connect(
  mapStateToProps,
  {editarProducto, mostrarProducto}
)(EditarProducto);
