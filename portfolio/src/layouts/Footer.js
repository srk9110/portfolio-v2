import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {goUrl} from '../utils/goUrl';

function Footer() {
    return (
        <section id="footer">
            <div className="contact-wrap">
                <div className="git icon" onClick={() => {goUrl("https://github.com/srk9110")}}/>
                <div className="blog icon" onClick={() => {goUrl("https://srk911028.tistory.com")}}/>
                <div className="mail icon">
                    <a href="mailto:srk911028@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} />
                    </a>
                </div>
            </div>
            <div className="right">© 2023. Kang Sae Rom. All rights reserved.</div>
        </section>
    )
}

export default Footer;