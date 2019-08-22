import {combineReducers} from 'redux';

import {authentication} from './Authenticate';
import {registration} from './registerReducer';
import {users} from './userReducer';
import {alert} from './alertReducer';
import {accountBank} from './accountBankReducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    accountBank
});

export default rootReducer;
