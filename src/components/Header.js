import React from 'react';
import PropTypes from 'prop-types';
// the most simple structure, an arrow function with a single return statement
// if more lines are requiered we NEED return with { }
const Header =  ({ site, onClickAdd }) => (<div className="header-content">    
        <div className='header-title-text'>Some random people, tutorial of {site} </div>
        <input type="button" onClick={onClickAdd} value="Add video" className="header-button-add"/>
    </div>
);

Header.propTypes = {
    onClickAdd: PropTypes.func.isRequired
}
export default Header;