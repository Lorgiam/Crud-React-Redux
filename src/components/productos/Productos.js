import React, {Component} from "react";

//redux
import {connect} from "react-redux";
import {mostrarProductos} from "../../actions/productosActions";

import Producto from "../producto/Producto";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }
  render() {
    const {productos} = this.props;
    return (
      <React.Fragment>
        <h2 className='text-center my-5'>Listado de Productos</h2>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <ul>
              {productos.map(producto => {
                return <Producto key={producto.id} info={producto} />;
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStatetoProps = state => ({
  productos: state.productos.productos
});
export default connect(
  mapStatetoProps,
  {mostrarProductos}
)(Productos);
