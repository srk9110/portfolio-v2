import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {goUrl} from '../utils/goUrl';

function Footer() {

    return (
        <article id="footer" className="common">
            <div className="profile-wrap">
                <div className="git icon" onClick={() => {goUrl("https://github.com/srk9110")}}/>
                <div className="mail icon">
                    <a href="mailto:srk911028@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} />
                    </a>
                </div>
            </div>
            <div className="right">© 2023. Kang Sae Rom. All rights reserved.</div>
        </article>
    )
}

export default Footer;