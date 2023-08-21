import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {scroll} from '../utils/scroll';

function Up() {
    const [sticky, setSticky] = useState("");

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

    return (
        <div className={`up-btn ${sticky}`} onClick={() => scroll("main")}>
            <FontAwesomeIcon icon={faChevronUp} style={{color: "#919191",}} />
        </div>
    )
}

export default Up;