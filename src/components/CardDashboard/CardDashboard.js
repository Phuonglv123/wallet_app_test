import React, {Component} from 'react';
import {Card, Col, Row, Button} from "antd";
import {withTranslation} from 'react-i18next';
import './CardDashboard.css';

class CardDashboard extends Component {

    render() {
        const {t, i18n} = this.props;
        return (
            <div id='card-dashboard'>
                <Row gutter={32}>
                    <Col sm={24} md={8} lg={8} xl={8}>
                        <Card className='list-card' bordered={false}>
                            <Row gutter={12}>
                                <Col span={14}>
                                    <div className='title-card'>
                                        <span>Transaction</span>
                                    </div>
                                    <div className='btn-dashboard'>
                                        <Button>View</Button>
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div>
                                        <img src={require('../../res/images/icon-dash1.png')} alt="" width={'100%'}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8}>
                        <Card className='list-card' bordered={false}>
                            <Row gutter={12}>
                                <Col span={14}>
                                    <div className='title-card'>
                                        <span>Sent NLB</span>
                                    </div>
                                    <div className='btn-dashboard'>
                                        <Button>View</Button>
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div>
                                        <img src={require('../../res/images/icon-dash2.png')} alt="" width={'100%'}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8}>
                        <Card className='list-card' bordered={false}>
                            <Row gutter={12}>
                                <Col span={14}>
                                    <div className='title-card'>
                                        <span>Receive NLB</span>
                                    </div>
                                    <div className='btn-dashboard'>
                                        <Button>View</Button>
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div>
                                        <img src={require('../../res/images/icon-dash3.png')} alt="" width={'100%'}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation('common')(CardDashboard);
