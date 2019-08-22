import {userConstant} from '../constants/userConstant';
import {history} from '../helper/history';
import AppURL from "../components/AppRoute/AppURL";
import {authHeader} from "../helper/authHeader";
import Auth from "../services/Auth";
import userServices from "../services/userServices";
import axios from 'axios';

export const userActions = {
    login,
    logout,
    getAll,
    getBankAccount
};

function login({username, password, secCode}) {
    return dispatch => {
        dispatch(request());
        Auth.login({username, password, secCode})
            .then((res) => {
                dispatch(success(res));
                Auth.saveUser(res.id_token);
                authHeader(res.id_token);
                history.push(AppURL.home())
            })
            .catch((error) => {
                dispatch(failure(error))
            })
    };

    function request(user) {
        return {type: userConstant.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstant.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstant.LOGIN_FAILURE, error}
    }
}

function logout() {
    Auth.logOut();
    history.push(AppURL.login());
    return {type: userConstant.LOGOUT}

}

// function register(user) {
//     return dispatch => {
//         dispatch(request(user));
//
//         userService.register(user)
//             .then(
//                 user => {
//                     dispatch(success());
//                     history.push('/login');
//                     dispatch(alertAction.success('Registration successful'));
//                 },
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(alertAction.error(error));
//                 }
//             );
//     };
//
//     function request(user) {
//         return {type: userConstant.REGISTER_REQUEST, user}
//     }
//
//     function success(user) {
//         return {type: userConstant.REGISTER_SUCCESS, user}
//     }
//
//     function failure(error) {
//         return {type: userConstant.REGISTER_FAILURE, error}
//     }
// }

function getAll() {
    return dispatch => {
        dispatch(request());
        userServices.getAllUser()
            .then((users) => {
                dispatch(success(users));
                return users;
            })
            .catch((error) => {
                dispatch(failure(error))
            });
    };

    function request() {
        return {type: userConstant.GETALL_REQUEST}
    }

    function success(users) {
        return {type: userConstant.GETALL_SUCCESS, users}
    }

    function failure(error) {
        return {type: userConstant.GETALL_FAILURE, error}
    }
}

function getBankAccount() {
    return dispatch => {
        dispatch(request());
        userServices.getBankAccount()
            .then(accountBank => {
                dispatch(success(accountBank));
                return accountBank;
            })
            .catch((error) => {
                dispatch(failure(error))
            })
    };

    function request() {
        return {type: userConstant.GETACCOUNTBANK_REQUEST}
    }

    function success(accountBank) {
        return {type: userConstant.GETACCOUNTBANK_SUCCESS, accountBank}
    }

    function failure(accountBank) {
        return {type: userConstant.GETACCOUNTBANK_FAILURE, accountBank}
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));
//
//         userService.delete(id)
//             .then(
//                 user => {
//                     dispatch(success(id));
//                 },
//                 error => {
//                     dispatch(failure(id, error));
//                 }
//             );
//     };
//
//     function request(id) {
//         return {type: userConstant.DELETE_REQUEST, id}
//     }
//
//     function success(id) {
//         return {type: userConstant.DELETE_SUCCESS, id}
//     }
//
//     function failure(id, error) {
//         return {type: userConstant.DELETE_FAILURE, id, error}
//     }
// }
