import React, {Component} from 'react';
import {Icon} from 'antd';

class MyBreadcrumb extends Component {
    render() {
        return (
            <div style={{margin: '16px 0'}}>
                {this.props.items && this.props.items.map((i, index) => {
                    return (
                        <div key={index} id='myBreadCrumb'>
                            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                                <Icon style={{fontSize: 26, color: '#0b648f'}} type={i.icon}/>
                                <span style={{fontSize: 26, color: '#0b648f', marginLeft: 10}}>{i.text}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MyBreadcrumb;
