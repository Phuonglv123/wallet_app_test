import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon, Input} from "antd";
import MyBreadcrumb from "../../../components/MyBreadcrumb/MyBreadcrumb";
import './ProfileScene.css'

class ProfileScene extends Component {
    render() {
        return (
            <div id='profile'>
                <MyBreadcrumb items={[
                    {
                        icon: 'user',
                        text: 'Profile'
                    }
                ]}/>
                <Row gutter={64}>
                    <Col span={8}>
                        <div>
                            <Card style={{width: '100%'}} className='list-card'>
                                <div className='profile-user'>
                                    <div>
                                        <img src={require('../../../res/images/icon-profile.png')} alt=""/>
                                    </div>
                                    <div>

                                    </div>
                                </div>

                            </Card>
                        </div>

                        <div style={{marginTop: '30px', textAlign: 'center'}}>
                            <Card style={{width: '100%'}} className='list-card'>
                                <div>
                                    <h2>Two-factory Authenticate</h2>
                                </div>
                                <div>
                                    <span>Enable two-factory authenticate improve account security</span>
                                </div>
                                <div className='button'>
                                    <Button>ENABLE</Button>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div>
                            <Card style={{width: '100%'}} className='list-card'>
                                <div>
                                    <h2>Your Private Login Key</h2>
                                </div>
                                <div
                                    className='input-confirm-table'>
                                    <span className='label'>Review your private login key here</span>
                                    <Input
                                        addonAfter={<div style={{letterSpace: 2}}>
                                            <span>Copy</span>
                                            <Icon type={"copy"}/>
                                        </div>}
                                        size={"large"}
                                    />
                                </div>
                            </Card>
                        </div>

                        <div style={{marginTop: '30px'}}>
                            <Card style={{width: '100%'}} className='list-card'>
                                <div>
                                    <h2>Your Private Login Key</h2>
                                </div>
                                <div
                                    className='input-confirm-table'>
                                    <span className='label'>Verify Email Address</span>
                                    <Input
                                        addonAfter={<div style={{letterSpace: 2}}>
                                            <span>Copy</span>
                                            <Icon type={"copy"}/>
                                        </div>}
                                        size={"large"}
                                    />
                                </div>
                                <div
                                    className='input-confirm-table'>
                                    <span className='label'>View Key</span>
                                    <Input
                                        addonAfter={<div style={{letterSpace: 2}}>
                                            <span>Copy</span>
                                            <Icon type={"copy"}/>
                                        </div>}
                                        size={"large"}
                                    />
                                </div>
                                <div
                                    className='input-confirm-table'>
                                    <span className='label'>Spend Key</span>
                                    <Input
                                        addonAfter={<div style={{letterSpace: 2}}>
                                            <span>Copy</span>
                                            <Icon type={"copy"}/>
                                        </div>}
                                        size={"large"}
                                    />
                                </div>
                            </Card>
                        </div>

                        <div style={{marginTop: '30px'}}>
                            <Card style={{width: '100%', textAlign: 'center'}} className='list-card'>
                                <div>
                                    <h2>Import transactions</h2>
                                </div>
                                <div>
                                    <span style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse labore modi optio provident tempore voluptatibus!</span>
                                </div>
                                <div className='button'>
                                    <Button block>
                                        PLACE SELLING ORDER
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProfileScene;
