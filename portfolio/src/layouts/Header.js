import React, {useState, useEffect} from 'react';

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

    const scroll = (key) => {
      const element = document.querySelector(`#${key}`);
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    return (
        <article id="header">
            <div className={`contents-wrap ${sticky}`}>
                <div className="logo" onClick={() => scroll("main")}>KSR's PORTFOLIO</div>
                <div className="btn-wrap">
                    <div className="btn" onClick={() => scroll("skill")}>SKILL</div>
                    <div className="btn" onClick={() => scroll("project")}>PROJECT</div>
                    <div className="btn" onClick={() => scroll("contact")}>CONTACT</div>
                </div>
            </div>
        </article>
    )
}

export default Header;