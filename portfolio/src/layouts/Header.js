import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {scroll} from '../utils/scroll';

function Header(props){
    const [sticky, setSticky] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
    }, []);

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
                    <div className="btn" onClick={() => scrollHandler("skill")}>SKILL</div>
                    <div className="btn" onClick={() => scrollHandler("project")}>PROJECT</div>
                    <div className="btn" onClick={() => scrollHandler("contact")}>CONTACT</div>
                </div>
                <div className="side-btn" onClick={() => toggleHandler()}>  
                    <FontAwesomeIcon icon={faBars} style={{color: "#272727",}} />
                </div>
            </div>
            <div className={`sidebar ${toggle ? "toggle" : ""}`}>
                <div className="btn-wrap">
                    <div className="btn" onClick={() => scrollHandler("skill")}>SKILL</div>
                    <div className="btn" onClick={() => scrollHandler("project")}>PROJECT</div>
                    <div className="btn" onClick={() => scrollHandler("contact")}>CONTACT</div>
                </div>
            </div>
        </article>
    )
}

export default Header;