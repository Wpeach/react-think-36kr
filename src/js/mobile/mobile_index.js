import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="最新文章" key="1">最新文章</TabPane>
                    <TabPane tab="明星公司" key="2">社会</TabPane>
                    <TabPane tab="行业新闻" key="3">国内</TabPane>
                    <TabPane tab="早期项目" key="4">国际</TabPane>
                    <TabPane tab="深度报告" key="5">娱乐</TabPane>
                    <TabPane tab="技能GET" key="4">国际</TabPane>
                    <TabPane tab="行业研究" key="5">娱乐</TabPane>
                
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        );
    };
}