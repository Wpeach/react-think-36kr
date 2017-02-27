/**
 * Created by wengp on 2017/2/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css'; 
import PCIndex from './pc/pc_index';
import PCNewsDetails from './pc/pc_news_detail';
import MobileIndex from './mobile/mobile_index';
import PCNewsEditor from './pc/pc_news_editor';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
  render(){
    return (
    <div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <Router history={hashHistory}>
          <Route path="/" component={PCIndex}></Route>
          <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
          <Route path="/editor" component={PCNewsEditor}></Route>
          <Route path="/editor/:uniquekey" component={PCNewsEditor}></Route>
        </Router>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <MobileIndex/>
      </MediaQuery>
    </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));