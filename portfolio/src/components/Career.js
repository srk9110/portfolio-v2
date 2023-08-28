import React from 'react';

function Career(props){
    return(
        <article id="career" className="common">
            <h2>CAREER</h2>
            <div className="contents-wrap" data-aos="zoom-in-up">
                <div className="content">
                    <div className="logo-wrap">
                        <div className="logo"/>
                    </div>
                    <div className="info-wrap">
                        <h3 className="company">(주) Linco</h3>
                        <div className="date">2021.07 ~ 2023.08</div>
                        <div className="info">
                            <div className="title">프론트엔드 개발 및 유지보수</div>
                            <ul>
                                <li>자체 서비스 및 외주 프로젝트 프론트엔드 퍼블리싱과 개발 진행</li>
                                <li>추가 기능 개발 및 유지보수 진행</li>
                            </ul>
                            <div className="title">자체 서비스(코코리뷰) 문의 대응</div>
                            <ul>
                                <li>코코리뷰 위젯 설치지원 및 문의 대응</li>
                                <li>웹 크롤링(python - selenium)을 통한 리뷰 컨텐츠 수집 및 관련 이슈와 문의 대응</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Career;