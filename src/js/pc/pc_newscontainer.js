import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
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
                <Row>
                    <Col span={2}></Col>
                    <Col span={13} class="container">
                        <div class="picturecarousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg" style={topImage}/></div>
                                    <div><img src="./src/images/carousel_2.jpg" style={topImage}/></div>
                                    <div><img src="./src/images/carousel_3.jpg" style={topImage}/></div>
                                    <div><img src="./src/images/carousel_4.jpg" style={topImage}/></div>
                                </Carousel>
                        </div>
                        <PCNewsImageBlock count={3} type="guoji" width="800px"  imageWidth="232px"/>
                        <Tabs class="newslist">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={7}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}