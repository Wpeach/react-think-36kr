import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class PCHeader extends React.Component {

    constructor(){
        super();
        this.state={
            current:'top'
        }
    }

    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png" alt="logo"></img>
                            <span>36氪</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>最新文章
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>明星公司
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>行业新闻
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>早期项目
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>深度报告
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>技能GET
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>行业研究
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}
