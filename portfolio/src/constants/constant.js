const constant = {
    skill: [
        {
            id: 1,
            type: 'Front-End',
            data: [
                {name: 'html'},
                {name: 'css'},
                {name: 'sass'},
                {name: 'tailwind'},
                {name: 'javascript'},
                {name: 'jquery'},
                {name: 'react'},
                {name: 'typescript'},
                {name: 'nextjs'},
            ]
        },
        {
            id: 2,
            type: 'Web Crawling',
            data: [
                {name: 'python'},
                {name: 'selenium'}    
            ]
        },
        {
            id: 3,
            type: 'Version Control Tool',
            data: [
                {name: 'git'}
            ]
        },
        {
            id: 4,
            type: ' Design Communication Tool',
            data: [
                {name: 'figma'}
            ]
        }      
    ],
    projects:  [ 
        {
            id: 1,
            type: ['web'],
            title: "어디서 뭐 먹을까",
            engTitle: "whatToEat",
            work: "서비스 기획, 개발 및 배포",
            workPlace: "사이드 프로젝트",
            date: "2023.09 ~ 2023.10",
            skill: ["nextjs", "typescript", "tailwind"],
            desc: "방문할 지역의 음식점과 카페를 무작위로 골라주는 사이드 프로젝트입니다. kakao api (검색, 지도) 기능을 이용하였습니다.",
            link: "https://what-to-eat-sigma.vercel.app/",
            imagePath: ["/images/project/what-to-eat-1.PNG", "/images/project/what-to-eat-2.PNG", "/images/project/what-to-eat-3.PNG", "/images/project/what-to-eat-4.PNG"]
        },  
        {
            id: 2,
            type: ['web', 'cafe24'],
            title: "코코리뷰",
            engTitle: "CocoReview",
            work: "서비스/어드민 페이지 퍼블리싱 및 프론트엔드 개발, 웹 크롤링, 유지보수, 기능 추가, 문의 및 설치 요청 대응",
            workPlace: "Linco",
            date: "2021.07 ~ 2023.08",
            skill: ["react", "scss", "jquery", "Laravel-blade"],
            desc: "위젯을 통한 리뷰 작성과 조회, 리뷰 관리 시스템을 제공하는 cafe24 리뷰 관리 서비스입니다.",
            link: "https://co-co.co.kr/",
            imagePath: ["/images/project/coco-1.png", "/images/project/coco-2.png", "/images/project/coco-3.png", "/images/project/coco-4.png", "/images/project/coco-5.png", "/images/project/coco-6.png", "/images/project/coco-7.png", "/images/project/coco-8.png"]
        },  
        {
            id: 3,
            type: ['web', 'android', 'ios'],
            title: "마이링크",
            engTitle: "Milink",
            work: "서비스 페이지 퍼블리싱 및 프론트엔드 개발, 유지보수",
            workPlace: "Linco",
            date: "2023.02~ 2023.05",
            skill: ["react", "scss", "Laravel-blade"],
            desc: "프로필 링크, 블로그 링크, 쇼핑몰 링크 등 다양한 링크를 페이지로 구성하여 공유할 수 있는 멀티 링크 공유 서비스입니다.",
            link: "https://milink.co.kr/",
            linkAnd: "https://play.google.com/store/apps/details?id=com.linco.milink&hl=ko",
            linkIos: "https://apps.apple.com/us/app/%EB%A7%88%EC%9D%B4%EB%A7%81%ED%81%AC-milink/id1671983725",
            imagePath: ["/images/project/milink-1.png", "/images/project/milink-2.png", "/images/project/milink-3.png", "/images/project/milink-4.png", "/images/project/milink-5.png", "/images/project/milink-6.png", "/images/project/milink-7.png", "/images/project/milink-8.png"]
        },           
        {
            id: 4,
            type: ['web', 'android', 'ios'],
            title: "마이북",
            engTitle: "Mibook",
            work: "서비스 페이지 퍼블리싱 및 프론트엔드 개발, 유지보수",
            workPlace: "Linco",
            date: "2022.11 ~ 2023.02",
            skill: ["react", "scss", "Laravel-blade"],
            desc: "서비스 제공업체(파트너)와 고객간의 편리한 예약 관리와 체계적인 고객 관리 시스템을 제공하는 서비스입니다.",
            link: "https://mibook.co.kr/",
            linkAnd: "https://play.google.com/store/apps/details?id=com.linco.mibook&hl=ko",
            linkIos: "https://apps.apple.com/us/app/%EB%A7%88%EC%9D%B4%EB%B6%81-mibook/id1666480995",
            imagePath: ["/images/project/mibook-1.png", "/images/project/mibook-2.png", "/images/project/mibook-3.png", "/images/project/mibook-4.png", "/images/project/mibook-5.png", "/images/project/mibook-6.png"]
        },    
        {
            id: 5,
            type: ['android', 'ios'],
            title: "쏜다",
            engTitle: "Ssonda",
            work: "어드민 페이지 퍼블리싱 및 프론트엔드 개발, 유지보수",
            workPlace: "Linco",
            date: "2022.10 ~ 2022.11",
            skill: ["react", "scss"],
            desc: "대부업체와 이용자간의 쉽고 빠른 대출 성사를 위한 대부정보 플랫폼 서비스입니다.",
            linkAnd: "https://play.google.com/store/apps/details?id=com.wakib.ssonda&hl=ko-KR",
            linkIos: "https://apps.apple.com/KR/app/id6444467376?mt=8",
            imagePath: ["/images/project/ssonda-1.png", "/images/project/ssonda-2.png", "/images/project/ssonda-3.png", "/images/project/ssonda-4.png"]
        },      
        {
            id: 6,
            type: ['web', 'android', 'ios'],
            title: "굿타임",
            engTitle: "GoodTime",
            work: "어드민 페이지 퍼블리싱 및 프론트엔드 개발, 유지보수",
            workPlace: "Linco",
            date: "2022.06 ~ 2022.07",
            skill: ["react", "scss"],
            desc: "루먼랩의 아이들의 ABA 기반 문제행동 개선에 대한 교육 컨텐츠를 제공하는 서비스입니다.",
            link: "http://13.124.117.49",
            linkAnd: "https://play.google.com/store/apps/details?id=com.lumanlab.goodtime&hl=ko-KR",
            linkIos: "https://apps.apple.com/ua/app/%EA%B5%BF%ED%83%80%EC%9E%84/id1639965955",
            imagePath: ["/images/project/goodTime-1.png", "/images/project/goodTime-2.png", "/images/project/goodTime-3.png", "/images/project/goodTime-4.png"]
        },
        {
            id: 7,
            type: ['web'],
            title: "클릭커",
            engTitle: "Clkr",
            work: "서비스 페이지 퍼블리싱 및 프론트엔드 개발, 유지보수",
            workPlace: "Linco",
            date: "2021.08 ~ 2022.06",
            skill: ["react", "scss",  "jquery", "Laravel-blade"],
            desc: "출연 아티스트 및 제작 스태프 구인구직 플랫폼 서비스입니다. 구인 구직시 제출하는 프로필과 포트폴리오를 제작, 관리할 수 있습니다.",
            link: "https://clkr.co.kr",
            imagePath: ["/images/project/clkr-1.png", "/images/project/clkr-2.png", "/images/project/clkr-3.png", "/images/project/clkr-4.png", "/images/project/clkr-5.png"]
        },
        {
            id: 8,
            type: ['web'],
            title: "대단한 클로버",
            engTitle: "The Greate Clover",
            work: "서비스 페이지 퍼블리싱, 프론트엔드 개발",
            workPlace: "Linco",
            date: "2021.07 ~ 2021.09",
            skill: ["react", "scss"],
            desc: "코로나 백신을 접종한 코인 보유자를 대상으로한 호텔예약 이벤트 페이지입니다.",
            link: "https://greatclover.com",
            imagePath: ["/images/project/clover-1.png", "/images/project/clover-2.png", "/images/project/clover-3.png", "/images/project/clover-4.png"]
        },                
    ]
};

export default constant;