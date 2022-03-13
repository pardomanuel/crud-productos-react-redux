import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productosActions';

const EditarProducto = () => {
    const [ producto, setProducto ] = useState({
        nombre: '',
        precio: ''
    });

    const productoeditar = useSelector(state => state.productos.productoeditar);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    useEffect(() => {
        setProducto(productoeditar);
    }, [productoeditar]);
    
    const onChangeFormulario = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    
    const { id, nombre, precio } = productoeditar;
    
    const submitEditarProducto = e => {
        e.preventDefault();

        dispatch(editarProductoAction(producto));
        navigate('/');
    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>
                        <form
                            onSubmit={ submitEditarProducto }
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={producto.nombre}
                                    onChange={ e => onChangeFormulario(e) }
                                />

                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={producto.precio}
                                    onChange={ e => onChangeFormulario(e) }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditarProducto
