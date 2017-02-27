import React from 'react';
import Ueditor from './ueditor';

export default class PCNewsEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            news: '请输入文字'
        };
    }
    render() {
        const {news} = this.state;
        return (
            <div>
                <Ueditor value={news} id="content" height="200" disabled={!this.props.canEdit}/> 
            </div>
        );
    }
}