import React from 'react'
import PropTypes from 'prop-types'

//COMPONENTES
import Noticia from './Noticias'

const ListaNoticias = ({noticias}) =>(
    <div className="row">
        {noticias.map(noticia => (
            <Noticia
                key={noticia.url}
                noticia={noticia}
            />
        ))}
    </div>
)

ListaNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}

export default ListaNoticias