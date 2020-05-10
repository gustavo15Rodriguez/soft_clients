import React from 'react';

class Popup extends React.Component {

    render() {
        if (this.props.statusText !== undefined) {
            if (this.props.statusText === 'Created') {
                return (
                    <div className="alert alert-success" role="alert">
                        ¡Genial! Operacion exitosa.
                    </div>
                )
            } else {
                return (
                    <div className="alert alert-danger" role="alert">
                       ¡Ups! La operacion no se ha podido realizar con exito.
                    </div>
                )
            }
        } else {
            return (
                <div className="alert alert-info" role="alert">
                    Operacion en proceso. Se le notificara el estado final de su peticion.
                </div>
            )
        }
    }
}

export default Popup;