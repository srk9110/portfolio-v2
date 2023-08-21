import React, { useEffect } from 'react';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import {scroll} from '../utils/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Main(props){
    return (
        <article id="main">
            <div className="image-wrap">
                <div className="title-wrap">
                    <h2 className="title">FRONT-END DEV</h2>
                    <div className="sub-title">PORTFOLIO</div>
                </div>
                <div className="scroll-down-wrap" onClick={() => scroll("skill")}>
                    <div className="scroll-down">SCROLL DOWN</div>
                    <div className="down-icon">
                        <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} />
                        <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} />
                    </div>
                </div>
            </div>
            <Skill/>
            <Project/>
            <Contact/>
        </article>
    )
}

export default Main;