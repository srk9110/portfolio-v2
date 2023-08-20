import React from 'react';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

function Main(props){
    return (
        <article id="main">
            <div className="image-wrap">
               <h2 className="text">안녕하세요 어쩌고 저쩌고 나는 개쩌는 프로그래머</h2>
            </div>
            <Skill/>
            <Project/>
            <Contact/>
        </article>
    )
}

export default Main;