import Header from "./components/header";
import Productos from './components/productos';
import NuevoProducto from './components/nuevoProducto';
import EditarProducto from './components/EditarProducto';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <div className='container mt-5'>
          <Routes>
            <Route index path="/" element={<Productos />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
