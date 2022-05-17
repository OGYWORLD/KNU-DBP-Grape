import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel, Checkbox } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import { Link } from 'react-router-dom';
import {LayoutOutlined, FunnelPlotOutlined, GlobalOutlined, StarOutlined} from '@ant-design/icons'

function Mio(){

    return(
        <div>
            <div className = "body">
                미오
            </div>
        </div>
    );
}

export default Mio;
