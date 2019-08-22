import React, {Component} from 'react';
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import {Button, Card, Col, Icon, Input, Row} from "antd";
import './ReceiveScene.css';

class ReceiveScene extends Component {
    render() {
        return (
            <div id='receive'>
                <MyBreadcrumb items={[
                    {
                        icon: 'download',
                        text: 'Receive'
                    }
                ]}/>
                <CardDashboard/>
                <div style={{marginTop: '30px'}}>
                    <Row>
                        <Col span={24}>
                            <div className='card-table-sent'>
                                <Card className='list-card'
                                      style={{width: '90%'}}
                                      title='Send funds'>
                                    <div style={{width: '80%'}}>
                                        <div className='input-confirm-table'>
                                            <span>Amount</span>
                                            <Input
                                                size={"large"}
                                                prefix={<img src={require('../../res/images/onlylogo.png')}
                                                             width='20px'/>}
                                            />
                                        </div>
                                        <div className='input-confirm-table'>
                                            <span>Receiver address</span>
                                            <Input
                                                size={"large"}
                                            />
                                        </div>
                                        <div className='input-confirm-table'>
                                            <Row gutter={16}>
                                                <Col span={16}>
                                                    <span>Receiver address</span>
                                                    <Input
                                                        addonAfter={<Icon type="setting"/>}
                                                        size={"large"}
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <span>Receiver address</span>
                                                    <Input
                                                        size={"large"}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='block-confirm'>
                                            <Button size={"large"} block>
                                                Primary
                                            </Button>
                                        </div>

                                    </div>

                                    <div className='card-sent-confirm'>
                                        <span className='title-head-confirm'>Confirmation Send NLB</span>
                                        <div>
                                            <div className='card-confirm-absolute'>
                                                <span>Transaction ID</span>
                                                <span>32423423</span>
                                            </div>

                                            <div className='card-confirm-absolute'>
                                                <span>To</span>
                                                <span>32423423</span>
                                            </div>

                                            <div className='card-confirm-absolute'>
                                                <span>Date</span>
                                                <span>32423423</span>
                                            </div>

                                            <div className='card-confirm-absolute'>
                                                <span>Payment ID</span>
                                                <span>32423423</span>
                                            </div>
                                        </div>

                                        <div className='button-confirm'>
                                            <Button>Confirm</Button>
                                        </div>

                                    </div>
                                </Card>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ReceiveScene;
