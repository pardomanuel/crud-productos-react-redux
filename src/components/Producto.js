import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productosActions';

const Producto = ({ producto }) => {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const confirmarEliminarProducto = id => {
        Swal.fire({
            title: 'Estas seguro?',
            text: `Estas a pundo de eliminar el producto ${nombre}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#78c2ad',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(borrarProductoAction(id));
            }
          })
    }

    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto));
        navigate(`/productos/editar/${producto.id}`);
    }
    return ( 
        <tr>
            <td>{ nombre }</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => redireccionarEdicion(producto)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className='btn btn-danger'
                    onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Producto