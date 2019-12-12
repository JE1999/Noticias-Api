import React, { Component } from 'react'

class Formulario extends Component{
    state = { }

    render(){
        return(
            <div className="row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <div className="input-field col s12 m8">
                            <select>
                                <option value="science">Science</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="general">General</option>
                                <option value="health">Health</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                            <label>Materialize Select</label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Formulario