import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Formulario extends Component{
    state = { 
        categoria : 'general'
    }

    CambiarCategoria = e =>{
        this.setState({
            categoria : e.target.value
        }, () => {

        //Enviarlo a la pagina principal
        this.props.consultarNoticias(this.state.categoria)
        
        })
    }

    render(){
        return(
            <div className="row">
                <br/>
                <div className="col s12 m6 offset-m2">
                    <form>
                        <div className="input-field col s12 offset-m2">
                            <select
                                onChange={this.CambiarCategoria}
                            >
                                <option value="general">General</option>
                                <option value="science">Science</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Health</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                            <label>Categoria</label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}

export default Formulario