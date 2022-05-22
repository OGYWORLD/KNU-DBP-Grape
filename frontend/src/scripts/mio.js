import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel, Checkbox, notification, } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined} from '@ant-design/icons'
import Bottom from "./bottom"
import mio from "../image/ad.jpg"


function Mio(){

    const [checkNum, setCheckNum] = useState(0);

    function onChange(e) {
        setCheckNum(1);
      }

    const openNotification = placement => {
        notification.info({
          message: `예매 안내`,
          description:
          <>
            <b style={{color: "#C62323"}}>※예매자는 본페이지 모든 내용을 숙지/동의한 것으로 간주합니다.</b><br/>
            <b>-티켓 예매/수령, 관람연령, 교통, 좌석에 따른 안내 미숙지는 관람자 본인에게 책임이 있으며, 해당 사유로 인한 예매 티켓의 변경/취소/환불은 불가합니다.</b>
            <br/><br/>
            <li style={{color: "#C62323"}}>※만 13세 이상 관람가로, 입장연령미만은 티켓소지/보호자동반여부와 관계없이 객석입장이 불가합니다.</li>
            <li>(2022년 기준 2009년생 포함 이전 출생자)</li>
            <li>-티켓 수령 시 생년월일 확인이 가능한 증빙서류(건강보험증, 여권, 주민등록등본 등)를 반드시 지참하시기 바랍니다.</li>
            <br/><br/>
            <li>※할인 받은 내역이 있으신 경우, 증빙서류필참으로 미지참시 정가차액지불 하셔야합니다.</li>
            <br/><br/>
            <li style={{color: "#C62323"}}>※공연 시작 후에는 예매한 좌석으로 입장이 불가합니다.</li>
            <li>지연 입장은 지정된 ‘지연 입장 시간’에 예매하신 좌석이 아닌 ‘지연 입장 석’에서 관람하게 됩니다. ‘지연 입장 시간’이 지나거나 
                ‘매진’으로 지연석 확보가 어려울 경우 관람이 불가할 수 있습니다. ‘매진’의 경우 별도의 안내가 없을 수 있는 점 참고 부탁드리며, 이로 인한 변경/취소/환불은 불가하니 공연 시작 전까지 입장하여 주시길 바랍니다.</li>
            <br/><br/><br/>
            <li>※본 공연장은 별도의 주차시설이 없습니다. 지역적 특성상 차량 진입 및 주차에 어려움이 있으니, 가급적 대중교통을 이용 부탁드립니다.</li>
            <br/><br/><br/>
            <hr/>
            
            <Checkbox onChange={onChange} style={{marginLeft: "500px"}}>하루동안 보지 않기</Checkbox>
          </>,
          placement,
          duration: 0,
          style : { width: "750px", height: "700px"},
        });
      };

    const [nkey, setNkey] = useState("create");

    function handleChange(key) {
        setNkey(key.key);
      }

      const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return(
        <div>
            {(checkNum == 0) &&
            (openNotification('top'))}

            <div className = "body">
            <Link to="/KNU-DBP-Grape"><img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/></Link>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "210px", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
                <Link to="/KNU-DBP-Grape/login"><b style={{fontSize: "15px", marginLeft: "950px", marginTop: "55px", position:"absolute", color: "black"}}> 로그인 </b></Link>
                <b style={{fontSize: "15px", marginLeft: "1015px", marginTop: "54px", position:"absolute",}}>|</b>
                <Link to="/KNU-DBP-Grape/new"><b style={{fontSize: "15px", marginLeft: "1030px", marginTop: "55px", position:"absolute", color: "black"}}> 회원가입 </b></Link>
                <br/><br/><br/><br/><br/>

                <Menu mode="horizontal" style={{width: "1140px", borderColor: "#DADADA",  borderWidth: "0 0 4px", fontFamily: "HSSSaemaul", fontSize: "17px", color: "#626262"}}
                onClick={handleChange} >
                    <Link to="/KNU-DBP-Grape">
                    <Menu.Item key="create" icon={<LayoutOutlined />} style={{marginLeft:"50px", marginRight: "120px", borderWidth: "0 0 4px", color: "#626262"}}>
                    창작 뮤지컬
                    </Menu.Item>
                    </Link>
                    <Menu.Item key="ricens" icon={<FunnelPlotOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    라이센스 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="korea" icon={<GlobalOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    내한 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="concert" icon={<StarOutlined />} style={{marginRight: "120px", borderWidth: "0 0 4px"}}>
                    콘서트 / 강연
                    </Menu.Item>
                </Menu>

                <br/><br/><br/>

                <b style = {{fontSize: "25px", position:"absolute"}}>[창작] 미오 프라텔로</b>
                <b style = {{fontSize: "15px", color: "#717171", marginLeft: "20px", position:"absolute", marginLeft: "250px", marginTop: "10px"}} >드림아트센터 1관</b>
                <img src = {mio} style = {{width: "280px", position:"absolute", marginTop: "65px"}}/>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "60px"}}>장소</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "90px"}}>드림아트센터 1관</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "130px"}}>공연기간</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "160px"}}>2022.03.08 ~2022.06.19</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "210px"}}>공연시간</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "240px"}}>100분</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "290px"}}>관람연령</b>
                <p style = {{fontSize: "17px", position:"absolute", marginLeft: "350px", marginTop: "320px"}}>중학생이상 관람가</p>

                <b style = {{fontSize: "20px", position:"absolute", marginLeft: "350px", marginTop: "370px"}}>가격</b>
                <p style = {{fontSize: "15px", position:"absolute", marginLeft: "350px", marginTop: "400px"}}>R석 66,000원 S석 44,000원</p>
                <p style = {{fontSize: "15px", position:"absolute", marginLeft: "350px", marginTop: "423px"}}>R1석 66,000원 S1석 44,000원</p>


                <Tabs defaultActiveKey="1" onChange={callback} style = {{position:"absolute", marginTop: "600px", width: "1140px",}} size="large">
                    <TabPane tab="공연정보" key="1">
                    Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="부가정보" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                </Tabs>
                
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Bottom/>
        </div>
    );
}

export default Mio;
