import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Row, Col, BackTop} from 'antd';

export default class MobileNewsDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json });
                document.title = this.state.newsItem.title + "- React 36Kr新闻平台";
            })

    };
    createMarkup() {
        return { __html: this.state.newsItem.pagecontent };
    };

    render() {
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={16} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={4}></Col>
                    <Col span={2}></Col>
                </Row>
                <MobileFooter></MobileFooter>
                <BackTop/>
            </div>
        );
    }
}