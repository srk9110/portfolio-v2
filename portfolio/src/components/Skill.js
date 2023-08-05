import React from 'react';
import CONSTANT from '../constants/constant';

function Skill(props){
    const skillList = CONSTANT.skill;

    return (
        <article id="skill" className="common">
            <h2>SKILL</h2>
            {
                skillList.length && skillList.map((skill, index) => (
                    <div className="contentsWrap" key={`skill_${index}`}>
                        <div className="title">{skill.title}</div>
                        <div className="contents">
                        {
                            skill.data?.length && skill.data.map((item, itemIndex) => (
                                <div className={`icon ${item.name}`} key={`item_${itemIndex}`}/>  
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