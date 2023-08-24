import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AboutMe(props){
    return(
        <article id="aboutMe" className="common">
            <h2>ABOUT ME</h2>
            <div className="contents-wrap" data-aos="zoom-in" data-aos-duration="1000">
                <div className="profile-wrap">
                    <div className="mail icon">
                        <a href="mailto:srk911028@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} />
                        </a>
                    </div>
                    <div className="git icon">
                    </div>
                </div>
                <div className="text-wrap">
                    <div className="quote left"/>
                    <div className="text">
                        안녕하세요! 프론트엔드 개발자 강새롬입니다. <br/>
                        다양한 실무 경험을 통해 동적인 반응형 웹 페이지를 구축하는 경험을 쌓았으며
                        React와 같은 프론트엔드 프레임워크를 사용하여 복잡한 웹 애플리케이션들을 개발한 경험이 있습니다.<br/>
                        저는 개발 과정에서의 다양한 의견을 존중하고 효과적으로 통합하고자 하며,<br/>
                        문제 해결 능력을 바탕으로 어려운 상황에서도 최선의 해결책을 찾아내기 위해 노력합니다.<br/>
                        항상 협력하며 성장하는 기회를 소중히 여기며, 새로운 기술을 탐구하는 개발자가 되고자합니다.
                    </div>
                    <div className="quote right"/>
                </div>
            </div>
        </article>
    )
}

export default AboutMe;