import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';

import {history} from '../../helper/history';
import LoginScene from "../../scenes/LoginScene/LoginScene";
import RegisterScene from "../../scenes/RegisterScene/RegisterScene";
import {PrivateRoute} from "./PrivateRoute";
import {Layout} from 'antd';
import MySidebar from "../MySidebar/MySidebar";
import MyHeader from "../MyHeader/MyHeader";
import AppURL from "./AppURL";
import TransactionScene from "../../scenes/TransactionScene/TransactionScene";
import SentScene from "../../scenes/SentScene/SentScene";
import ReceiveScene from "../../scenes/ReceiveScene/ReceiveScene";
import AccountScene from "../../scenes/AccountScene/AccountScene";
import SupportScene from "../../scenes/SupportScene/SupportScene";
import DashboardScene from "../../scenes/DashboardScene/DashboardScene";
import App from "../../App";
import ProfileScene from "../../scenes/AccountScene/ProfileScene/ProfileScene";
import SubmitScene from "../../scenes/AccountScene/SubmitScene/SubmitScene";

const {Content} = Layout;

export const routes = [
    {
        path: AppURL.dashboard(),
        exact: true,
        component: DashboardScene,
    }, {
        path: AppURL.transaction(),
        component: TransactionScene,
    }, {
        path: AppURL.sent(),
        component: SentScene,
    }, {
        path: AppURL.receive(),
        component: ReceiveScene,
    }, {
        path: AppURL.support(),
        component: SupportScene
    }, {
        path: AppURL.profile(),
        component: ProfileScene
    }, {
        path: AppURL.submit(),
        component: SubmitScene
    }
];

class AppRoute extends Component {
    constructor(props) {
        super(props);
        this.state={
            colappsed: false
        }
    }

    render() {
        const DefaultContainer = () => {
            return (
                <div id="rootContainer">
                    <div id="components-layout-demo-custom-trigger">
                        <Layout>
                            <MySidebar colappsed={this.state.colappsed}/>
                            <Layout>
                                <MyHeader onChangeCol={()=>{this.setState({colappsed: !this.state.colappsed})}}/>
                                <Content style={{margin: '0 16px'}}>
                                    <Switch>
                                        {routes.map((route, index) => (
                                            <PrivateRoute key={index} path={route.path} exact={route.exact}
                                                   component={route.component}/>
                                        ))}
                                    </Switch>
                                </Content>
                            </Layout>
                        </Layout>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path="/login" component={LoginScene}/>
                        <Route path="/register" component={RegisterScene}/>
                        <Route component={DefaultContainer}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default AppRoute;
