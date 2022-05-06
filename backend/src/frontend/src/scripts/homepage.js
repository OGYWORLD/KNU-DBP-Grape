import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons'
import finalT from "../image/Final_carousel.png"
import Create from "./create"

function Homepage(){

    const [nkey, setNkey] = useState("create");

    function handleChange(key) {
        setNkey(key.key);
      }

    return(
        <div>
            <div className = "body">
                <img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "210px", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
                <b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute",}}> 로그인 </b>
                <b style={{fontSize: "15px", marginLeft: "1015px", marginTop: "54px", position:"absolute",}}>|</b>
                <b style={{fontSize: "15px", marginLeft: "1030px", marginTop: "55px", position:"absolute",}}> 회원가입 </b>
                <br/><br/><br/><br/><br/>

                <Menu mode="horizontal" defaultSelectedKeys={['create']} style={{width: "1140px", borderColor: "#DADADA",  borderWidth: "0 0 4px", fontFamily: "HSSSaemaul", fontSize: "17px", color: "#626262"}}
                onClick={handleChange} >
                    <Menu.Item key="create" icon={<MailOutlined />} style={{marginLeft:"50px", marginRight: "120px", borderWidth: "0 0 4px",}}>
                    창작 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="ricens" icon={<MailOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    라이센스 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="korea" icon={<MailOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    내한 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="concert" icon={<MailOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    콘서트 / 강연
                    </Menu.Item>
                </Menu>

                <br/><br/><br/>
                {
                    (nkey=="create") &&
                    (<Create/>)
                }

            </div>
        </div>
    );
}

export default Homepage;
