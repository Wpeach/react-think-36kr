import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Tabs, Carousel } from 'antd';
import MobileList from "./mobile_list";

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    render() {
        const topImage={
            display:"block",
            width:"100%",
            height:"212px"
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }

        return (
            <div>
                <MobileHeader></MobileHeader>
                <div class="picturecarousel">
                    <Carousel {...settings}>
                        <div><img src="./src/images/carousel_1.jpg" style={topImage} /></div>
                        <div><img src="./src/images/carousel_2.jpg" style={topImage} /></div>
                        <div><img src="./src/images/carousel_3.jpg" style={topImage} /></div>
                        <div><img src="./src/images/carousel_4.jpg" style={topImage} /></div>
                    </Carousel>
                </div>
                <Tabs>
                    <TabPane tab="最新文章" key="1">
                        <MobileList count={20} type="top" />
                    </TabPane>
                    <TabPane tab="明星公司" key="2">
                        <MobileList count={20} type="shehui" />
                    </TabPane>
                    <TabPane tab="行业新闻" key="3">
                        <MobileList count={20} type="guonei" />
                    </TabPane>
                    <TabPane tab="早期项目" key="4">
                        <MobileList count={20} type="guoji" />
                    </TabPane>
                    <TabPane tab="深度报告" key="5">
                        <MobileList count={20} type="yule" />
                    </TabPane>
                    <TabPane tab="技能GET" key="4">
                        <MobileList count={20} type="top" />
                    </TabPane>
                    <TabPane tab="行业研究" key="5">
                        <MobileList count={20} type="top" />
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        );
    };
}