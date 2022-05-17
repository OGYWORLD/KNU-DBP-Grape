import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel, Steps } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {EditOutlined} from '@ant-design/icons'

function New(){

    const { Step } = Steps;

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [chpw, setChpw] = useState("");
    const [ad, setAd] = useState("");
    const [email, setEmail] = useState("");
    const [current, setCurrent] = useState(0);

    const onChangeId = e => {
        setId(e.target.value)
        setCurrent(1)
    };

    const onChangePw = e => {
        setPw(e.target.value)

    };

    const onChangeChpw = e => {
        setChpw(e.target.value)
        setCurrent(2)

    };

    const onChangeEmail = e => {
        setEmail(e.target.value)
        setCurrent(3)

    };

    const onChangeAd = e => {
        setAd(e.target.value)
        setCurrent(4)

    };


    return(
        <div>
            <div className = "body">
            <Link to="/KNU-DBP-Grape"><img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/></Link>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "210px", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
             <Link to="/KNU-DBP-Grape/login"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> 로그인 </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1015px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/KNU-DBP-Grape/new"><b style={{fontSize: "15px", marginLeft: "1030px", marginTop: "55px", position:"absolute", color: "black"}}> 
                회원가입 </b></Link>
                <br/><br/><br/><br/><br/><br/>
                <div style = {{backgroundColor: '#DADADA', width: '1140px', height: '5px', marginTop: "10px"}}></div>


                <Steps current={current} style= {{width: "1100px", marginTop: "20px"}}>
                    <Step title="아이디 입력" />
                    <Step title="비밀번호 입력"/>
                    <Step title="이메일 입력" />
                    <Step title="주소 입력"/>
                </Steps>
                
                <b style = {{paddingTop: "40px", fontSize: "25px", paddingLeft: "230px", position:"absolute"}}><EditOutlined /> 회원가입</b>

                <div style = {{paddingLeft: "300px", paddingTop: "140px"}}>
                <b style = {{fontSize: "20px", marginRight: "80px"}}>아이디 </b>
                <Input placeholder="아이디"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeId}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "60px"}}>비밀번호 </b>
                <Input.Password placeholder="비밀번호"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangePw}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "20px"}}>비밀번호 확인</b>
                <Input.Password placeholder="비밀번호 확인"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeChpw}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "80px"}}>이메일 </b>
                <Input placeholder="이메일"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeEmail}/>
                </div>

                <div style = {{paddingLeft: "300px", paddingTop: "20px"}}>
                <b style = {{fontSize: "20px", marginRight: "55px"}}>주소 입력 </b>
                <Input placeholder="주소 입력"  style={{width: "350px", height: "50px", fontSize: "15px"}} onChange={onChangeAd}/>
                </div>

                {
                    (id.length == 0 || pw.length == 0 || chpw.length == 0 || email.length == 0 || ad.length == 0) &&
                    (<Button style = {{marginLeft: "300px", marginTop: "70px", width: "500px", height: "60px"}} disabled >회원가입 하기</Button>)
                }

{
                    (id.length != 0 && pw.length != 0 && chpw.length != 0 && email.length != 0 && ad.length != 0) &&
                    (<>
                    <Link to="/KNU-DBP-Grape"><Button style = {{marginLeft: "300px", marginTop: "70px", width: "500px", height: "60px", backgroundColor: "#5B3291", color: "white"}} >회원가입 하기</Button></Link>
                    </>)
                }

            </div>
        </div>
    );
}

export default New;
