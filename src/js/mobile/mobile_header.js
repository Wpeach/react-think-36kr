import React from 'react';

export default class MobileHeader extends React.Component {
    render() {
        return (
           <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo"/>
                    <span>36氪</span>
                </header>
           </div>
        );
    };
}