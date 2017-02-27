import React from 'react';
import { Row,Col } from 'antd';
import { Router, Route, Link, hashHistory } from 'react-router';
import Config from '../item_config';
export default class PCNewsBlock extends React.Component {

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
        //     .then(response => response.json()).then(json => this.setState({ news: json }))

        fetch(Config.host+"/api/post/", myFetchOptions)
        .then(response => response.json()).then(json => this.setState({ news: json.data.data }));



    };

    render() {
        const {news} = this.state;
         console.log( this.state)
        const newsList = news.length
            ?
           news.map((newsItem, index) => (
                <section key={index} className="m_article list-item special_section clearfix">
                    <Link to={`details/${newsItem.id}`}>
                        <div className="m_article_img">
                            <img src={newsItem.cover_img} alt={newsItem.title}/>
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{newsItem.status}</span>
                                    <span className="m_article_tiem">{newsItem.update_time}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
            ))
            :
            "没有获取到任何数据"
        return (
            <div class="topNewsList">
                <Col span={24}>
                        {newsList}
                </Col>
            </div>
        );
    }
}
