import React from 'react';

// the most simple structure, an arrow function with a single return statement
// if more lines are requiered we NEED return with { }
const Header =  ({ name }) => (<div className="header-content">    
    <div className='header-title-text'>My top videos, by {name} </div>
    <input type="button" value="Add video" className="header-button-add"/>
</div>);

export default Header;