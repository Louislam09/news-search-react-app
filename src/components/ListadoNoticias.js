import React from 'react';
import Noticia from './Noticia';
import ProTypes from 'prop-types';

const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className='row'>
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
     );
}
 
ListadoNoticias.proTypes = {
    noticias: ProTypes.array.isRequired
}
export default ListadoNoticias;