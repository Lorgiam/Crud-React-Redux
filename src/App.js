import React, {Component} from "react";

//redux
import {Provider} from "react-redux";
import store from "./store";

//componentes
import Header from "./components/header/Header";
import Productos from "./components/productos/Productos";
import NuevoProducto from "./components/nuevoProducto/NuevoProducto";
import EditarProducto from "./components/editarProducto/EditarProducto";

//router
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Productos} />
                <Route exact path='/productos/nuevo' component={NuevoProducto} />
                <Route exact path='/productos/editar/:id' component={EditarProducto} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
