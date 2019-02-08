import {
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  MOSTRAR_PRODUCTO,
  MOSTRAR_PRODUCTOS
} from "../types/types";

//axios
import axios from "axios";

export const mostrarProductos = () => async dispacth => {
  const respuesta = await axios.get("http://localhost:5000/productos");
  dispacth({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};

export const mostrarProducto = id => async dispacth => {
  const respuesta = await axios.get(`http://localhost:5000/productos/${id}`);
  dispacth({
    type: MOSTRAR_PRODUCTO,
    payload: respuesta.data
  });
};

export const eliminarProducto = id => async dispacth => {
  await axios.delete(`http://localhost:5000/productos/${id}`);
  dispacth({
    type: ELIMINAR_PRODUCTO,
    payload: id
  });
};

export const agregarProducto = producto => async dispacth => {
  const respuesta = await axios.post("http://localhost:5000/productos", producto);
  dispacth({
    type: AGREGAR_PRODUCTO,
    payload: respuesta.data
  });
};

export const editarProducto = producto => async dispacth => {
  const respuesta = await axios.put(`http://localhost:5000/productos/${producto.id}`, producto);
  console.log(respuesta);

  dispacth({
    type: EDITAR_PRODUCTO,
    payload: respuesta.data
  });
};
