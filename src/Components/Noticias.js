import React from 'react'
import Truncate from 'react-truncate'
import PropTypes from 'prop-types'

const Noticias = ({noticia}) =>{

    //Extraer los datos
    const { urlToImage, url, title, description, source } = noticia

    //cargar imagen si esta disponible
    const imagen = (urlToImage) ? 
            <img src={urlToImage} alt="Imagen no disponible"/>
            : null

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                    <span className="card-title">{source.name}</span>
                </div>

                <div className="card-content">
                    <h6>{title}</h6>
                    <hr/>
                    <Truncate lines={1} ellipsis={<span>... <a href={url} target="_blank" rel="noopener noreferrer">Leer mas</a></span>}>
                        {description}
                    </Truncate>
                </div>

                <div className="card-action">
                    <center><a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Ver Noticia Completa</a></center>
                </div>
            </div>
        </div>
    )
}


Noticias.propTypes = {
    noticia : PropTypes.array.isRequired
}

export default Noticias