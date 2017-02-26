/**
 * Created by wengp on 2017/2/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css'; 
import PCIndex from './pc/pc_index';
import MobileIndex from './mobile/mobile_index';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
  render(){
    return (
    <div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <PCIndex/>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 1224px)'>
        <MobileIndex/>
      </MediaQuery>
    </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));