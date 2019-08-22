import {userConstant} from '../constants/userConstant';

const initialState = {
    items: []
}

export function accountBank(state = initialState, action) {
    switch (action.type) {
        case userConstant.GETACCOUNTBANK_REQUEST:
            return {
                loading: true
            };
        case userConstant.GETACCOUNTBANK_SUCCESS:
            return {
                items: action.accountBank
            };
        case userConstant.GETACCOUNTBANK_FAILURE:
            return {
                error: action.error
            };
        case userConstant.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(accountBank =>
                    accountBank.id === action.id
                        ? {...accountBank, deleting: true}
                        : accountBank
                )
            };
        case userConstant.DELETE_SUCCESS:
            // remove deleted user from state
            return {
                items: state.items.filter(accountBank => accountBank.id !== action.id)
            };
        case userConstant.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user
            return {
                ...state,
                items: state.items.map(accountBank => {
                    if (accountBank.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const {deleting, ...userCopy} = accountBank;
                        // return copy of user with 'deleteError:[error]' property
                        return {...userCopy, deleteError: action.error};
                    }

                    return accountBank;
                })
            };
        default:
            return state
    }
}
