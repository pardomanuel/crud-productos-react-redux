import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { crearNuevoProductoAction } from "../actions/productosActions";
import { mostrarAlertaAction, ocultarAlertaAction } from "../actions/alertaActions";

const NuevoProducto = () => {

    const [ nombre, guardarNombre ] = useState('');
    const [ precio, guardarPrecio ] = useState(0);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    //Acceder al state del store
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );
    const alerta = useSelector( state =>  state.alerta.alerta);

    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    const submitNuevoProducto = e => {
        e.preventDefault();

        //Validar form
        if (nombre.trim() === '' || precio <= 0) {
            const alerta = {
                msg: 'Ambos Campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch(mostrarAlertaAction(alerta));
            return;
        }
        //Si no hay errores
        dispatch(ocultarAlertaAction());

        //Crear nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        guardarNombre('');
        guardarPrecio(0);

        navigate('/');
    }
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        { alerta && <p className={alerta.classes}>{ alerta.msg }</p>}
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={ e => guardarNombre(e.target.value) }
                                />

                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={ e => guardarPrecio(Number(e.target.value)) }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                        { cargando && <p className="p2">cargando...</p> }
                        { error && <p className="alert alert-danger text-uppercase text-center p2 mt-3">Hubo un error</p> }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto
