import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import Config from '../item_config';
import { Row, Col, Button } from 'antd';
import { Router, Route, Link, hashHistory } from 'react-router';

export default class PCNewsDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: '',
            newsId: ''
        };
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({ newsItem: json });
        //         document.title = this.state.newsItem.title + "- React 36Kr新闻平台";
        //     })
        fetch(Config.host + "/api/post/" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json.data });
                document.title = this.state.newsItem.title + "- React 36Kr新闻平台";
            })
    };
    createMarkup() {
        return { __html: this.state.newsItem.content };
    };

    render() {
        const {newsItem} = this.state;
        console.log(newsItem);
        //const newId = this.props.params.uniquekey;
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <p id="title">{newsItem.title}</p>
                        <img src={newsItem.cover_img} />
                        <p>{newsItem.update_time}</p>
                        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <Link to={`editor/${this.props.params.uniquekey}`} target="_blank">
                            <div class="editor_btn">
                                <Button type="primary"  htmlType="button">编辑</Button>
                            </div>
                        </Link>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        );
    }
}
