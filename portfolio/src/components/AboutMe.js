import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faSchool, faIdCard, faCircle } from '@fortawesome/free-solid-svg-icons';

function AboutMe(props){
    const [weight, setWeight] = useState(0);

    const inputHandler = e => {
        setWeight(e.target.value);
    }

    return(
        <section id="aboutMe" className="common">
            <h2>ABOUT ME</h2>
            <div className="contents-wrap" data-aos="zoom-in">
                <div className="info-wrap">
                    <div className="info">
                        <FontAwesomeIcon icon={faUser} style={{color: "#888888"}}/>
                        <span className="title">강새롬</span>
                    </div>
                    <div className="info">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#888888"}}/>
                        <a href="mailto:srk911028@gmail.com">
                            <span className="title">srk911028@gmail.com</span>
                        </a>
                    </div>
                    <div className="info">
                        <FontAwesomeIcon icon={faSchool} style={{color: "#888888"}}/>
                        <span className="title">숭실대학교 글로벌미디어학부</span>
                    </div>
                    <div className="info">
                        <FontAwesomeIcon icon={faIdCard} style={{color: "#888888"}}/>
                        <span className="title">정보처리기사</span>
                    </div>
                </div>
                <div className="divide">
                    <FontAwesomeIcon icon={faCircle} style={{color: "#c9c9c9"}}/>
                    <FontAwesomeIcon icon={faCircle} style={{color: "#c9c9c9"}}/>
                    <FontAwesomeIcon icon={faCircle} style={{color: "#c9c9c9"}}/>
                </div>
                <div className="text-wrap">
                    <div className="quote left"/>
                    <div className="text">
                        안녕하세요! 프론트엔드 개발자 강새롬입니다. <br/>
                        다양한 실무 경험을 통해 동적인 반응형 웹 페이지를 구축하는 경험을 쌓았으며
                        React와 같은 프론트엔드 프레임워크를 사용하여 복잡한 웹 애플리케이션들을 개발한 경험이 있습니다.
                    </div>
                    <div className="quote right"/>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;