import React from 'react';
import ProTypes from 'prop-types';

const Header = ({titulo}) => {
    return ( 
        <nav className='nav-wrapper light-blue darken-3'>
            <a href='#!' className='brand-logo center'>{titulo}</a>
        </nav>
     );
}

Header.proTypes = {
    titule: ProTypes.string.isRequired
}

export default Header;