import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Header(props){
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
        <article id="header">
            <div className={`contentsWrap ${sticky}`}>
                <div className="logo">logo</div>
                <div className="btnWrap">
                    <div className="btn">skill</div>
                    <div className="btn">project</div>
                    <div className="btn">contact</div>
                </div>
            </div>
        </article>
    )
}

export default Header;