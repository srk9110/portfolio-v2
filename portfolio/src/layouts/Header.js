import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {scroll} from '../utils/scroll';

function Header(props){
    const [sticky, setSticky] = useState("");
    const [toggle, setToggle] = useState(false);
    const outsideRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    useEffect(()=> {
        window.addEventListener('mousedown', handleClose);
        return () => {
            window.removeEventListener('mousedown', handleClose);
        };
    });

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= window.screen.height - 200 ? "sticky" : "";
        setSticky(stickyClass);
    };

    const scrollHandler = (key) => {
        scroll(key);
        setToggle(false);
    };

    const handleClose = async e => {
        let target = document.querySelector(".side-btn");
        if(e.target === target 
        || e.target === target.childNodes[0] 
        || e.target === target.childNodes[0].childNodes[0]) return;

        let sideArea = outsideRef.current;
        let sideCildren = outsideRef.current.contains(e.target);
        if (toggle && (!sideArea || !sideCildren)) {
            await setToggle(false);
        }
    }

    const toggleHandler = (e) => {
        e.stopPropagation();
        setToggle(prev => !prev);
    };

    return (
        <article id="header">
            <div className={`contents-wrap ${sticky}`}>
                <div className="logo" onClick={() => scrollHandler("main")}>KSR's PORTFOLIO</div>
                <div className="btn-wrap">
                    <div className="btn" onClick={() => scrollHandler("aboutMe")}>ABOUT ME</div>
                    <div className="btn" onClick={() => scrollHandler("career")}>CAREER</div>
                    <div className="btn" onClick={() => scrollHandler("skill")}>SKILLS</div>
                    <div className="btn" onClick={() => scrollHandler("project")}>PROJECTS</div>
                </div>
                <div className="side-btn" onClick={(e) => toggleHandler(e)}>  
                    <FontAwesomeIcon icon={faBars} style={{color: "#272727",}} />
                </div>
            </div>
            <div className={`sidebar ${toggle ? "toggle" : ""}`} ref={outsideRef}>
                <div className="btn-wrap">
                    <div className="btn" onClick={() => scrollHandler("aboutMe")}>ABOUT ME</div>
                    <div className="btn" onClick={() => scrollHandler("career")}>CAREER</div>
                    <div className="btn" onClick={() => scrollHandler("skill")}>SKILLS</div>
                    <div className="btn" onClick={() => scrollHandler("project")}>PROJECTS</div>
                </div>
            </div>
        </article>
    )
}

export default Header;