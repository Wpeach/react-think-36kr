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
            contents: '请输入文字',
            newsItem:'<p>wewedss<p>'
        };
    };
    callback(e) {
        this.state({ contents: editor.getContent() });
    };
    componentWillMount(){
      let newContent="请输入内容";
      if(this.props.params.uniquekey){

            var editor = UE.getEditor("content");
            let self = this ;
            let newsId = this.props.params.uniquekey;
            editor.addListener("ready",function(self){

              fetch(Config.host+"/api/post/" + newsId, {method: 'GET'})
                  .then(response => response.json())
                  .then(json => {
                      newContent=json.data .content;
                      document.getElementById("title").value=json.data.title;
                      document.getElementById("cover_img").value=json.data.cover_img;
                      editor.setContent(newContent);
                  })

            });


      }
    }
    editorSubmit(e) {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        var data = this.props.form.getFieldsValue();
        let formData=new FormData();
        let fetchOptions = {
            method:'POST',
            body:formData,
        };
        formData.append("title",data.title);
        formData.append("cover_img",data.cover_img);
        formData.append("user_id",0);
        formData.append("markdown_content","22222");
        formData.append("content",UE.getEditor("content").getContent() );
        formData.append("pathname",data.title);
        formData.append("summary","nihao");
        if(this.props.params.uniquekey){
            formData.append("id",this.state.newsItem.id);
            fetchOptions = {
                method:'PUT',
                body:formData
            };
        }
        fetch("http://localhost:8360/api/post",fetchOptions).then(response => response.json())
            .then(json => {
                if(json.errno!=0){
                    message.error(json.errmsg);
                }else{
                    message.success("提交成功！");
                }

            });
        message.success("请求成功！");
    };
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
                            <Input id="title" style={title} placeholder="在此输入标题" {...getFieldProps('title') } />
                            <Row>
                                <Tabs>
                                <TabPane tab="图片链接上传" key="2">
                                    <Input id="cover_img" placeholder="在此输入图片链接" {...getFieldProps('cover_img') } />
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
                                <Ueditor id="content" height="400" onChange={this.callback.bind(this)} />
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
