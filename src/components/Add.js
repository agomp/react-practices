import React, {Component} from "react";
import { addVideo } from '../api';
import PropTypes from 'prop-types';

class Add extends Component {
    
    render() {
        const {onClose} = this.props; // Can be replaces by this.props.onClose in the line 11
        return (<div className="modal">
              <div className="modal-content">
                <span className="close" onClick={onClose(false)} >&times;</span>
                <h2> Crear nuevo Vídeo </h2>
                AQUÍ VA NUESTRO EL FORMULARIO
              </div>
            </div>);
    }
}


Add.propTypes = {
    onClose: PropTypes.func.isRequired
};
export default Add;