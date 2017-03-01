import React from 'react';
import Ueditor from './ueditor';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import { Row, Col, Input, Menu, Icon, Tabs, Upload, message, Button, Form } from 'antd';
import Config from '../item_config';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class PCNewsEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            content: '',
            title: '',
            cover_img: ''

        };
    };
    editorReady() {
        fetch(Config.host + "/api/post/" + this.props.params.uniquekey, { method: 'GET' })
            .then(response => response.json())
            .then(json =>{
                this.setState({ id: json.data.id, title: json.data.title, cover_img: json.data.cover_img})
                UE.getEditor("content").setContent(json.data.content);
            } );

    }
    componentWillMount() {
        let self = this;
        if (this.props.params.uniquekey) {

            var editor = UE.getEditor("content");

            let newsId = this.props.params.uniquekey;
            editor.addListener("ready", this.editorReady());
            console.log(this.state.title);
            console.log(this.state.content);
        }
    }
    editorSubmit(e) {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        var data = this.props.form.getFieldsValue();
        let formData = new FormData();
        let fetchOptions = {
            method: 'POST',
            body: formData,
        };
        formData.append("title", this.state.title);
        formData.append("cover_img", this.state.cover_img);
        formData.append("user_id", 0);
        formData.append("markdown_content", "22222");
        formData.append("content", UE.getEditor("content").getContent());
        formData.append("pathname", this.state.title);
        formData.append("summary", "nihao");
        if (this.props.params.uniquekey) {
            formData.append("id", this.props.params.uniquekey);
            fetchOptions = {
                method: 'PUT',
                body: formData
            };
        }
        fetch("http://localhost:8360/api/post", fetchOptions).then(response => response.json())
            .then(json => {
                if (json.errno != 0) {
                    message.error(json.errmsg);
                } else {
                    message.success("提交成功！");
                }

            });
        message.success("请求成功！");
    };
    handlechange(type, event) {
        let newstate = {};
        newstate[type] = event.target.value;
        this.setState(newstate);
    }
    render() {
        let {getFieldProps} = this.props.form;
        const upsetting = {
            name: 'file',
            action: 'http://localhost:8360/api/file'
        };
        const {contents} = this.state;
        const title = {
            margin: "30px 0  10px 0",
            fontSize: "18px",
            fontWeight: "400",
            height: "50px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };
        return (
            <div id="container">
                <PCHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Form horizontal onSubmit={this.editorSubmit.bind(this)}>
                            <Input id="title" value={this.state.title} style={title} placeholder="在此输入标题" onChange={this.handlechange.bind(this, 'title')} />
                            <Row>
                                <Tabs>
                                    <TabPane tab="图片链接上传" key="2">
                                        <Input id="cover_img" placeholder="在此输入图片链接" value={this.state.cover_img} onChange={this.handlechange.bind(this, 'cover_img')} />
                                    </TabPane>
                                    <TabPane tab="本地图片上传" key="1">
                                        <Upload {...upsetting}>
                                            <Button>
                                                <Icon type="upload" /> 点击上传
                                        </Button>
                                        </Upload>
                                    </TabPane>

                                </Tabs>
                                <p class="instr_word">(封面图片,支持 PNG/JPG格式图片)</p>
                            </Row>
                            <div class="ueditor">
                                <Ueditor value={this.state.content} id="content" height="400" onChange={this.handlechange.bind(this, 'content')} />
                            </div>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter />
            </div>
        );
    }
}
export default PCNewsEditor = Form.create({})(PCNewsEditor);
