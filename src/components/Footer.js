import React from 'react';
import {Link} from 'react-router-dom'

const Footer =  ({ name }) => (<div className="footer-content">
    <div className="footer-title-text">Created by: <strong>{name}</strong></div>
    <Link className="about-link" to={`/about`}><strong>Learn more about</strong></Link>
</div>);

export default Footer;