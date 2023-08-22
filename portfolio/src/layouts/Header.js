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

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (outsideRef.current &&
                !outsideRef.current.contains(e.target)) {
                setToggle(false); 
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [outsideRef]);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= window.screen.height - 200 ? "sticky" : "";
        setSticky(stickyClass);
    };

    const scrollHandler = (key) => {
        scroll(key);
        setToggle(false);
    };

    const toggleHandler = () => { 
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
                <div className="side-btn" onClick={() => toggleHandler()}>  
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