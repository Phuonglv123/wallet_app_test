import React, {Component} from 'react';
import {Icon, Menu, Layout,} from "antd";
import {Link} from "react-router-dom";
import AppURL from "../AppRoute/AppURL";

const {Sider} = Layout;
const {SubMenu} = Menu;

class MySidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            logo: true,
            breakpoint: null,
            collapsedWidth: undefined,
        }
    }

    componentDidMount(): void {
        let width_1024 = window.matchMedia("(width: 1024px)");
        let width_728 = window.matchMedia("(max-width: 768px)");
        if (width_1024.matches) {
            this.setState({
                collapsed: !this.state.collapsed,
                logo: false
            })
        } else if (width_728.matches) {
            this.setState({
                collapsedWidth: 0
            })
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Sider collapsible
                   collapsed={this.state.collapsed}
                   onCollapse={this.onCollapse}
                   breakpoint="sm"
                   collapsedWidth={this.state.collapsedWidth}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
                    <Menu.Item key="dashboard">
                        <Link to={AppURL.dashboard()}>
                            <Icon type={"dashboard"} style={{fontSize: '25px', color: '#2b627b'}}/>
                            <span style={{fontSize: '18px'}}>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="transaction">
                        <Link to={AppURL.transaction()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"transaction"}/>
                            <span style={{fontSize: '18px'}}>Transaction</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="sent">
                        <Link to={AppURL.sent()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"credit-card"}/>
                            <span style={{fontSize: '18px'}}>Sent</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="receive">
                        <Link to={AppURL.receive()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"download"}/>
                            <span style={{fontSize: '18px'}}>Receive</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="account_sub"
                        title={
                            <span>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"user"}/>
                              <span style={{fontSize: '18px'}}>Account</span>
                            </span>
                        }
                    >
                        <Menu.Item key="profile">
                            <Link to={AppURL.profile()}>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"user"}/>
                                <span style={{fontSize: '18px'}}>Profile</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="key">
                            <Link to={AppURL.profile()}>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"key"}/>
                                <span style={{fontSize: '18px'}}>Key</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="import">
                            <Link to={AppURL.profile()}>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={'import'}/>
                                <span style={{fontSize: '18px'}}>Import</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="submit">
                            <Link to={AppURL.submit()}>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={'to-top'}/>
                                <span style={{fontSize: '18px'}}>Submit</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="two_factor">
                            <Link to={AppURL.profile()}>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={'barcode'}/>
                                <span style={{fontSize: '18px'}}>Two Factor</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="log_out">
                            <Link to={AppURL.profile()}>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={'logout'}/>
                                <span style={{fontSize: '18px'}}>Log Out</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="support_sub"
                        title={
                            <span>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"question-circle"}/>
                                <span style={{fontSize: '18px'}}>Support</span>
                            </span>
                        }
                    >
                        <Menu.Item key="support">
                            <Link to={AppURL.profile()}>
                                <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"question-circle"}/>
                                <span style={{fontSize: '18px'}}>Support</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default MySidebar;
