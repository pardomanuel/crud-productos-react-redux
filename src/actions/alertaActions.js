import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types/index';

export function mostrarAlertaAction(alerta) {
    return (dispatch) => {
        dispatch( crearAlerta(alerta) )
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export const ocultarAlertaAction = () => {
    return (dispatch) => {
        dispatch(ocultarAlerta());
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})