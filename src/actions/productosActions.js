import {
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  MOSTRAR_PRODUCTO,
  MOSTRAR_PRODUCTOS
} from "../types/types";

//axios
import axios from "axios";

const URL = "https://my-json-server.typicode.com/Lorgiam/Productos/productos"

export const mostrarProductos = () => async dispacth => {
  const respuesta = await axios.get(URL);
  dispacth({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};

export const mostrarProducto = id => async dispacth => {
  const respuesta = await axios.get(`${URL}/${id}`);
  dispacth({
    type: MOSTRAR_PRODUCTO,
    payload: respuesta.data
  });
};

export const eliminarProducto = id => async dispacth => {
  await axios.delete(`${URL}/${id}`);
  dispacth({
    type: ELIMINAR_PRODUCTO,
    payload: id
  });
};

export const agregarProducto = producto => async dispacth => {
  const respuesta = await axios.post(URL, producto);
  dispacth({
    type: AGREGAR_PRODUCTO,
    payload: respuesta.data
  });
};

export const editarProducto = producto => async dispacth => {
  const respuesta = await axios.put(`${URL}/${producto.id}`, producto);
  console.log(respuesta);

  dispacth({
    type: EDITAR_PRODUCTO,
    payload: respuesta.data
  });
};
