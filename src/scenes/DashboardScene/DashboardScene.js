import React, {Component} from 'react';
import {Row, Col, Card} from "antd";
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb";
import {withTranslation} from 'react-i18next';
import CardDashboard from "../../components/CardDashboard/CardDashboard";

class DashboardScene extends Component {
    render() {
        const {t, i18n} = this.props;
        return (
            <div>
                <MyBreadcrumb items={[
                    {
                        icon: 'dashboard',
                        text: 'Dashboard'
                    }
                ]}/>
                <CardDashboard/>
                <div style={{marginTop: '30px'}}>
                    <Row gutter={32}>
                        <Col sm={24} md={8} lg={8} xl={8}>
                            <div className='table-transaction'>
                                <Card className='list-card' bordered={false}>
                                    <div>
                                        <div className='title-card-dash'>
                                            <h4>Latest transaction</h4>
                                        </div>
                                        <div className='head-table-dash'>
                                            <div>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItem: 'center'
                                                }}>
                                                    <h4 style={{color: '#2b627b', marginRight: '5px'}}>Type</h4>
                                                    <h4>NLB</h4>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 style={{color: '#2b627b'}}>Transaction ID</h4>
                                            </div>
                                            <div>
                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItem: 'center'
                                                }}>
                                                    <h4 style={{color: '#2b627b', marginRight: '5px'}}>Value</h4>
                                                    <h4>NLB</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='content-table-dash'>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                        </div>
                                        <div className='content-table-dash'>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                        </div>
                                        <div className='content-table-dash'>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                        </div>
                                        <div className='content-table-dash'>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                        </div>
                                        <div className='content-table-dash'>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                        </div>
                                        <div className='content-table-dash'>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                            <span>098900989</span>
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        <h2>GO TO TRADE</h2>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                        <Col sm={24} md={16} lg={16} xl={16}>
                            <div className='table-chart-dash'>
                                <Card className='list-card' bordered={false}>
                                    <div>
                                        <div className='title-card-dash'>
                                            <h4>Monero Chart</h4>
                                        </div>
                                        <div className='content-table-chart'>

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

export default withTranslation('common')(DashboardScene);
