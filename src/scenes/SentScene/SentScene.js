import React, {Component} from 'react';
import {Row, Card, Col, Input, Icon, Tooltip, Button} from "antd";
import MyBreadcrumb from "../../components/MyBreadcrumb/MyBreadcrumb";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import './SentScene.css';
import userServices from "../../services/userServices";

class SentScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueCoin: '',
            amount: '',
            comment: '',
            currency: "Sigabit",
            secCode: '',
            toAddress: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.sentCoin = this.sentCoin.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    async componentDidMount(): void {
        const res = await userServices.getBalanceCoin();
        this.setState({
            valueCoin: res.balance
        })
    }

    sentCoin = async (e) => {
        const {amount, comment, currency, secCode, toAddress} = this.state;
        const res = await userServices.sentCoin({
            amount, comment, currency, secCode, toAddress
        })
        console.log(res)
    };

    render() {

        return (
            <div id='sent'>
                <MyBreadcrumb items={[
                    {
                        icon: 'credit-card',
                        text: 'Sent'
                    }
                ]}/>
                <CardDashboard/>
                <div style={{marginTop: '30px'}}>
                    <Row>
                        <Col span={24}>
                            <div className='card-table-sent'>
                                <Card className='list-card'
                                      style={{width: '95%'}}
                                      title='Send funds'>
                                    <div style={{width: '100%'}}>
                                        <div className='input-confirm-table'>
                                            <span>Amount</span>
                                            <Input
                                                name='amount'
                                                onChange={this.handleChange}
                                                value={this.state.amount}
                                                size={"large"}
                                                prefix={<img src={require('../../res/images/onlylogo.png')}
                                                             width='15px'/>}
                                            />
                                        </div>
                                        <div className='input-confirm-table'>
                                            <span>Receiver address</span>
                                            <Input
                                                name='toAddress'
                                                onChange={this.handleChange}
                                                value={this.state.toAddress}
                                                size={"large"}
                                            />
                                        </div>
                                        <div className='input-confirm-table'>
                                            <Row gutter={16}>
                                                <Col span={16}>
                                                    <span>Private Level (Ring Size)</span>
                                                    <Input
                                                        name='comment'
                                                        onChange={this.handleChange}
                                                        value={this.state.comment}
                                                        addonAfter={<div/>}
                                                        size={"large"}
                                                    />
                                                </Col>
                                                <Col span={8}>
                                                    <span>Payment ID (Optional)</span>
                                                    <Input
                                                        name='secCode'
                                                        onChange={this.handleChange}
                                                        value={this.state.secCode}
                                                        size={"large"}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className='block-confirm'>
                                            <Button size={"large"} block onClick={this.sentCoin}>
                                                SEND PAYMENT
                                            </Button>
                                        </div>

                                    </div>

                                    {/*<div className='card-sent-confirm'>*/}
                                    {/*    <span className='title-head-confirm'>Confirmation Send NLB</span>*/}
                                    {/*    <div style={{*/}
                                    {/*        display: 'flex',*/}
                                    {/*        justifyContent: 'flex-start',*/}
                                    {/*        alignItems: 'center'*/}
                                    {/*    }}>*/}
                                    {/*        <div className='title-icon'>*/}
                                    {/*            <img src={require('../../res/images/sent.png')} alt=""/>*/}
                                    {/*        </div>*/}
                                    {/*        <div>*/}
                                    {/*            <span className='title-head-confirm'>23423423423</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div>*/}
                                    {/*        <div className='card-confirm-absolute'>*/}
                                    {/*            <span>Transaction ID</span>*/}
                                    {/*            <span>32423423</span>*/}
                                    {/*        </div>*/}

                                    {/*        <div className='card-confirm-absolute'>*/}
                                    {/*            <span>To</span>*/}
                                    {/*            <span>32423423</span>*/}
                                    {/*        </div>*/}

                                    {/*        <div className='card-confirm-absolute'>*/}
                                    {/*            <span>Date</span>*/}
                                    {/*            <span>32423423</span>*/}
                                    {/*        </div>*/}

                                    {/*        <div className='card-confirm-absolute'>*/}
                                    {/*            <span>Payment ID</span>*/}
                                    {/*            <span>32423423</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}

                                    {/*    <div className='button-confirm'>*/}
                                    {/*        <Button>Confirm</Button>*/}
                                    {/*    </div>*/}

                                    {/*</div>*/}
                                </Card>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default SentScene;
