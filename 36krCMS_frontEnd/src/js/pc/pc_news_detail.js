import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import Config from '../item_config';
import { Row, Col, Button} from 'antd';
import { Router, Route, Link, hashHistory } from 'react-router';

export default class PCNewsDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: '',
            newsId:''
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
        //<Link to={`details/${this.props.params.uniquekey}`}  target="_blank">
            //<Button class="add_btn" htmlType="button">编辑</Button>
        //</Link>
        fetch(Config.host+"/api/post/" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json.data });
                document.title = this.state.newsItem.title + "- React 36Kr新闻平台";
            })
    };
    createMarkup(){
      return {__html:this.state.newsItem.content};
    };

    render() {
        const {newsItem}=this.state;
        console.log(newsItem);
        //const newId = this.props.params.uniquekey;
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <h3>{newsItem.title}</h3>
                        <img src={newsItem.cover_img}/>
                        <p>{newsItem.update_time}</p>
                        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Link to={`editor/${this.props.params.uniquekey}`}  target="_blank">
                    <Button htmlType="button">编辑</Button>
                </Link>
                <PCFooter></PCFooter>
            </div>
        );
    }
}
