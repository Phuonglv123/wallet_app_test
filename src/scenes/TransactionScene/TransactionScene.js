import React, {Component} from 'react';
import {Row, Col, Card, Table, Button} from "antd";
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import './TransactionScene.css';
import userServices from "../../services/userServices";

class TransactionScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }

    async componentDidMount(): void {
        const res = await userServices.getRecentActivity();
        this.setState({
            data: res,
        });
        const res2 = await userServices.getAddressWallet();
        const res3 = await userServices.getWithdrawFee();
        console.log(res2, res3)
    }

    render() {
        return (
            <div id='transaction'>
                <MyBreadcrumb items={[
                    {
                        icon: 'transaction',
                        text: 'Transaction'
                    }
                ]}/>
                <CardDashboard/>
                <div style={{marginTop: '30px'}} className='table-transaction-scene'>
                    <Row gutter={64}>
                        <Col span={24}>
                            <Card className='list-card' style={{width: '100%'}} title={<div
                                style={{display: 'flex', alignItem: 'center', justifyContent: 'flex-start'}}>
                                <img src={require('../../res/images/transaction.png')} style={{width: '60px'}}/>
                                <div>
                                    <h2 style={{paddingTop: 5}}>Transaction history</h2>
                                </div>
                            </div>}>
                                <Table rowKey={record => record.id} style={{width: '100%', fontSize: '12px'}}
                                       stripes={'odd'} dataSource={this.state.data}
                                       columns={this.columns}/>
                            </Card>
                        </Col>
                        <div>
                            {/*<Col span={8}>*/}
                            {/*    <div className='transaction-details'>*/}
                            {/*        <Card style={{width: '100%'}}>*/}
                            {/*            <div><h2>Transaction details</h2></div>*/}
                            {/*            <div style={{display: 'flex', justifyContent: 'flex-start', alignItem: 'center'}}>*/}
                            {/*                <div className={'cricle-icon'}>*/}
                            {/*                    <img src={require('../../res/images/revieve.png')} width={'35px'} alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div style={{marginTop: 5}}>*/}
                            {/*                    <h2>098097798</h2>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div style={{*/}
                            {/*                width: '100%',*/}
                            {/*                display: 'flex',*/}
                            {/*                justifyContent: 'space-between',*/}
                            {/*                marginTop: '10px'*/}
                            {/*            }}>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>Transaction ID</span>*/}
                            {/*                </div>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>0987654324567</span>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div style={{*/}
                            {/*                width: '100%',*/}
                            {/*                display: 'flex',*/}
                            {/*                justifyContent: 'space-between',*/}
                            {/*                marginTop: '10px'*/}
                            {/*            }}>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>Blockheight</span>*/}
                            {/*                </div>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>0987654324567</span>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div style={{*/}
                            {/*                width: '100%',*/}
                            {/*                display: 'flex',*/}
                            {/*                justifyContent: 'space-between',*/}
                            {/*                marginTop: '10px'*/}
                            {/*            }}>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>To</span>*/}
                            {/*                </div>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>0987654324567</span>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div style={{*/}
                            {/*                width: '100%',*/}
                            {/*                display: 'flex',*/}
                            {/*                justifyContent: 'space-between',*/}
                            {/*                marginTop: '10px'*/}
                            {/*            }}>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>Date</span>*/}
                            {/*                </div>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>0987654324567</span>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div style={{*/}
                            {/*                width: '100%',*/}
                            {/*                display: 'flex',*/}
                            {/*                justifyContent: 'space-between',*/}
                            {/*                marginTop: '10px'*/}
                            {/*            }}>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>Fee</span>*/}
                            {/*                </div>*/}
                            {/*                <div style={{width: '50%'}}>*/}
                            {/*                    <span>0987654324567</span>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className='bnt-transaction-detail'>*/}
                            {/*                <Button>OK, GOT IT</Button>*/}
                            {/*            </div>*/}

                            {/*            <div className='icon-over-boder'>*/}
                            {/*                <img src={require('../../res/images/revieve.png')} alt=""/>*/}
                            {/*            </div>*/}
                            {/*        </Card>*/}

                            {/*    </div>*/}

                            {/*</Col>*/}
                        </div>
                    </Row>
                </div>
            </div>
        );
    }

    columns = [
        {
            title: 'Date Received',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Type',
            dataIndex: 'category',
            key: 'category',
        },
        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     key: 'address',
        // }, {
        //     title: 'Transaction ID',
        //     dataIndex: 'txid',
        //     key: 'txid',
        // }, {
        //     title: 'Confirmations',
        //     dataIndex: 'confirmations',
        //     key: 'confirmations',
        // },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];
}

export default TransactionScene;
