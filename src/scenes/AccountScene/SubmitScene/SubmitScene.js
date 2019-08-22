import React, {Component} from 'react';
import MyBreadcrumb from "../../../components/MyBreadcrumb/MyBreadcrumb";
import {Button, Card, Col, Form, Icon, Input, Row, Timeline} from "antd";
import './SubmitScene.css';
import userServices from "../../../services/userServices";

class SubmitScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: null,
            email: null,
            firstName: null,
            imageUrl: null,
            langKey: null,
            lastName: null,
            login: null,

        }
    }

    async componentDidMount(): void {
        const res = await userServices.getInfoAccount();
        this.setState({
            activated: res.activated,
            email: res.email,
            firstName: res.firstName,
            imageUrl: res.imageUrl,
            langKey: res.langKey,
            lastName: res.lastName,
            login: res.login,
        });
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleChangeAccount = async () => {
        const {activated, email, firstName, imageUrl, langKey, lastName, login} = this.state;
        await userServices.changeInfoAccount({
            activated,
            email,
            firstName,
            imageUrl,
            langKey,
            login,
            lastName
        });
    };

    render() {
        return (
            <div id='submit'>
                <MyBreadcrumb items={[
                    {
                        icon: 'to-top',
                        text: 'Submit'
                    }
                ]}/>
                <div>
                    <Card style={{width: '100%'}} className='list-card' title='Submit Verify Documents'>
                        <div>
                            <div>
                                <h2>1. PERSONAL INFORMATION</h2>
                            </div>
                            <div className='submit-content'>
                                <div>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <div className='input-confirm-table-submit'>
                                                <label htmlFor="label">First name</label>
                                                <Input name='firstName' value={this.state.firstName}
                                                       onChange={this.handleChange.bind(this)}/>
                                            </div>
                                            <div className='input-confirm-table-submit'>
                                                <label htmlFor="label">Last name</label>
                                                <Input name='lastName' value={this.state.lastName}
                                                       onChange={this.handleChange.bind(this)}/>
                                            </div>
                                            <div className='input-confirm-table-submit'>
                                                <label htmlFor="label">Gender</label>
                                                <Input/>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='input-confirm-table-submit'>
                                                <label htmlFor="label">Country Of Origin</label>
                                                <Input/>
                                            </div>
                                            <div className='input-confirm-table-submit'>
                                                <label htmlFor="label">Country Of Residence</label>
                                                <Input/>
                                            </div>
                                            <div className='input-confirm-table-submit'>
                                                <label htmlFor="label">Passport Number</label>
                                                <Input/>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>2. PERSONAL DOCUMENT</h2>
                            </div>
                            <div className='submit-content'>
                                <div style={{padding: '20px'}}>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi ea eum quam quos, ullam!</span>
                                    <div>
                                        <Row gutter={32}>
                                            <Col span={8}>
                                                <div className='item'>
                                                    <div className='suqare'>

                                                    </div>
                                                    <div className='button-square'>
                                                        <span>COPY OF THE FRONT COVER OF YOUR PASSPORT</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className='item'>
                                                    <div className='suqare'>

                                                    </div>
                                                    <div className='button-square'>
                                                        <span>COPY OF THE FRONT COVER OF YOUR PASSPORT</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className='item'>
                                                    <div className='suqare'>

                                                    </div>
                                                    <div className='button-square'>
                                                        <span>COPY OF THE FRONT COVER OF YOUR PASSPORT</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style={{padding: '40px'}}>
                            <Row gutter={32}>
                                <Col span={8}>
                                    <Timeline>
                                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                    </Timeline>
                                </Col>
                                <Col span={8}>
                                    <Timeline>
                                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                    </Timeline>
                                </Col>
                                <Col span={8}>
                                    <Timeline>
                                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                                    </Timeline>
                                </Col>
                            </Row>

                        </div>

                        <div className='block-confirm'>
                            <Button onClick={this.handleChangeAccount.bind(this)}>SUBMIT</Button>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default SubmitScene;
