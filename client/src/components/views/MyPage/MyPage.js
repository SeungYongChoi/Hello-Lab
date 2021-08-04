import { useEffect } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import './MyPage.css';
import '../views.css';

const labs = [
    {
        id: 0,
        name: "운영체제",
        prof: "최종무",
        imgPath: '/img/solid/mint.png'
       },
    {
        id: 1,
        name: "보안",
        prof: "조성제",
        imgPath: '/img/solid/pink.png'
       },
    {
        id: 2,
        name: "모바일",
        prof: "어쩌고",
        imgPath: '/img/solid/yellow.png'
    }
];

function MyPage(props) {

    const onDashboardHandler = (event) => {
        console.log(event.target);
        props.history.push('/lab');
        // 실제 동작 시 lab 페이지로 정보 넘겨줘야 함
        // lab 페이지는 정보 받아서 해당 lab 페이지 출력해야 함
    }

  return (
    <div className="wrap">
        <div className="header">
            <h1>
                <a href="/">
                <div className="logo"></div>
                </a>
                <span className="page">Dashboard</span>
            </h1>
        </div>
        <div id="container">
            <div id="profile">
                <img src="https://static.nid.naver.com/images/web/user/default.png?type=s160"/>
                <p>User name</p>
            </div>
            <div id="my_lab">
                <h2><span>내 연구실</span></h2>
                <ul id="lab_list">
                    {labs.map((section, index) => (
                        <li>
                            <div onClick={onDashboardHandler} className="dashboard_card">
                                <img className="lab_img" src={section.imgPath}/>
                                <p className="lab_name">{section.name} 연구실</p>
                                <p className="prof">{section.prof} 교수</p>
                            </div>
                        </li>  
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default withRouter(MyPage);