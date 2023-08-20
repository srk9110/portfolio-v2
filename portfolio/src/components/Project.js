import React from 'react';
import Slider from "react-slick";
import CONSTANT from '../constants/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBuilding, faPenToSquare, faCode, faLink, faCheck, faHouse,
    faLock, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  }

function Project(props){
    const projects = CONSTANT.projects;
    
    const goUrl = link => {
        window.open(`${link}`, "_blank");
    };

    return (
        <article id="project" className="common">
            <h2>PROJECT</h2>
            <div className="flexWrap">
            {
                projects.length && projects.map((project, index) => (
                    <div className="contents-wrap" key={index} data-aos="zoom-in-up" data-aos-duration="1000">
                        <div className="title-wrap">
                            <div className="title">{project.title} - {project.engTitle}</div>
                            <div className="line"/>
                            <div className="type-wrap">
                            {
                                project.type.length && project.type.map((item, typeIndex) => (
                                    <div className="type">{item}</div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="contents">
                            <Slider {...settings}>
                            {
                                project.imagePath.length && project.imagePath.map((image, imageIndex) => (
                                    <div className="project-image-wrap" key={imageIndex}>
                                        <div className="project-image" style={{backgroundImage: `url(${image})`}}/>
                                    </div>
                                ))
                            }
                            </Slider>
                            <div className="info-wrap">
                                <div className="info desc">
                                    <FontAwesomeIcon icon={faCheck} style={{color: "#4e5155"}} />
                                    <div className="desc">{project.desc}</div>
                                </div>
                                <div className="info">
                                    <div className="info-title-wrap">
                                        <FontAwesomeIcon icon={faCalendar} style={{color: "#4e5155",}} />
                                        <div className="title">개발 기간</div>
                                    </div>
                                    <div className="date">{project.date}</div>
                                </div>
                                <div className="info">
                                    <div className="info-title-wrap">
                                        <FontAwesomeIcon icon={faBuilding} style={{color: "#4e5155",}} />
                                        <div className="title">근무처</div>
                                    </div>
                                    <div className="work-place">{project.workPlace}</div>
                                </div>
                                <div className="info">
                                    <div className="info-title-wrap">
                                        <FontAwesomeIcon icon={faPenToSquare} style={{color: "#4e5155",}} />
                                        <div className="title">업무 내용</div>
                                    </div>
                                    <div className="work">{project.work}</div>
                                </div>
                                <div className="info">
                                    <div className="info-title-wrap">
                                        <FontAwesomeIcon icon={faCode} style={{color: "#4e5155",}}/>
                                        <div className="title">Front-End</div>
                                    </div>
                                    <div className="tag-wrap">
                                    {
                                        project.skill.length && project.skill.map((item, skillIndex) => (
                                            <div className={`tag ${item}`} key={skillIndex}>{item}</div>
                                        ))
                                    }
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="info-title-wrap">
                                        <FontAwesomeIcon icon={faLink} style={{color: "#4e5155",}} />
                                        <div className="title">Service Url</div>
                                    </div>
                                    <div className="url-wrap">
                                        {
                                            project.link ? 
                                                <div className="url" onClick={() => goUrl(project.link)}>
                                                    <FontAwesomeIcon icon={faHouse} />
                                                </div>
                                            : null    
                                        }
                                        {
                                            project.linkAdmin ? 
                                                <div className="url" onClick={() => goUrl(project.linkAdmin)}>
                                                    <FontAwesomeIcon icon={faLock} />
                                                </div>
                                            : null
                                        }
                                        {
                                            project.linkAnd ? 
                                                <div className="url" onClick={() => goUrl(project.linkAnd)}>
                                                    <FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#32de84",}} />
                                                </div>
                                            : null
                                        }
                                        {
                                            project.linkIos ? 
                                                <div className="url" onClick={() => goUrl(project.linkIos)}>
                                                    <FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#555555",}} />
                                                </div>
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </article>
    )
}

export default Project;