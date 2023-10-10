import React from 'react';
import CONSTANT from '../constants/constant';

function Skill(props){
    const skillList = CONSTANT.skill;

    return (
        <article id="skill" className="common">
            <h2>SKILLS</h2>
            {
                skillList.length && skillList.map((skill, index) => (
                    <div className="contents-wrap" key={`skill_${index}`} data-aos="zoom-in">
                        <div className="title">{skill.type}</div>
                        <div className="contents">
                        {
                            skill.data?.length && skill.data.map((item, itemIndex) => (
                                <div className="skill-wrap">
                                    <div className="icon-wrap" key={`item_${itemIndex}`}>
                                        <div className={`icon ${item.name}`}/>
                                    </div>  
                                    <div className="desc">{item.name}</div>
                                </div>
                            ))
                        }
                        </div>
                    </div>    
                ))
            }
        </article>
    )
}

export default Skill;