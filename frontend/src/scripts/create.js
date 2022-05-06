import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel, Tooltip } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import {CaretUpOutlined, AppstoreOutlined, SettingOutlined, NotificationTwoTone, NodeExpandOutlined} from '@ant-design/icons'
import finalT from "../image/Final_carousel.png"
import mio from "../image/ad.PNG"
import dia from "../image/ed.PNG"

function Create(){

    const now = new Date();

    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        background: '#DED6E4',
      };

    return(
        <div>
            <Carousel autoplay style={{width: "1140px", }}>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={finalT} style={{height: "300px", marginLeft: "280px"}}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={finalT} style={{height: "300px", marginLeft: "280px"}}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={finalT} style={{height: "300px", marginLeft: "280px"}}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={finalT} style={{height: "300px", marginLeft: "280px"}}/>
                    </h3>
                    </div>
                </Carousel>

            <br/><br/>
            <b style={{fontSize: "23px"}}>창작 뮤지컬</b>
            <div style = {{backgroundColor: '#A69BAE', width: '1140px', height: '15px'}}></div>
            <div style = {{backgroundColor: '#5A4968', width: '1140px', height: '5px'}}></div>
            <br/>
            <b style={{fontSize: "20px", marginLeft: "15px"}}>주간 랭킹</b>
            <b style={{fontSize: "17px", marginLeft: "15px", color: "#777777"}}>{now.getFullYear()}년 {now.getMonth()+1}월 {now.getDate()}일</b>
            <br/>
            <div style = {{backgroundColor: '#EBEBEB', width: '1140px', height: '5px', marginTop: "10px"}}></div>
            <b style={{fontSize: "25px", marginTop: "120px", marginLeft: "20px", position:"absolute"}}>1</b>
            <b style={{fontSize: "23px", marginTop: "162px", marginLeft: "7px", position:"absolute", color: "#C83D3D"}}><CaretUpOutlined /></b>
            <b style={{fontSize: "15px", marginTop: "168px", marginLeft: "33px", position:"absolute"}}>3</b>

            <Tooltip title="미오 프라텔로 (드림아트센터 1관)">
            <img src={mio} style={{height: "300px", marginLeft: "80px", marginTop: "30px", position:"absolute"}}/>
            </Tooltip>

            <b style={{fontSize: "20px", marginTop: "30px", marginLeft: "340px", position:"absolute", color: "#434343"}}>[창작뮤지컬] 미오 프라텔로</b>
            <b style={{fontSize: "17px", marginTop: "70px", marginLeft: "340px", position:"absolute", color: "#737373"}}>드림아트센터 1관 2022.03.08 ~ 2022.06.19</b>
            <div style = {{backgroundColor: '#666666', width: '800px', height: '2px', marginTop: "110px", position:"absolute", marginLeft:"340px"}}></div>

            <b style={{fontSize: "25px", marginTop: "180px", marginLeft: "360px", position:"absolute"}}>2</b>
            <b style={{fontSize: "23px", marginTop: "212px", marginLeft: "347px", position:"absolute", color: "#C83D3D"}}><CaretUpOutlined /></b>
            <b style={{fontSize: "15px", marginTop: "218px", marginLeft: "373px", position:"absolute"}}>3</b>

            <Tooltip title="디아길레프 (아트윈씨어터 1관)">
            <img src={dia} style={{height: "180px", marginLeft: "400px", marginTop: "130px", position:"absolute"}}/>
            </Tooltip>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    );
}

export default Create;