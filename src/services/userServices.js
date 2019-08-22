import {BaseAPI} from "./BaseAPI";

class UserServices extends BaseAPI {
    async getAllUser() {
        const res = await this.apiCall({
            url: 'users',
            method: 'GET',
            params: null
        });
        return res;
    }

    async getInfoAccount() {
        const res = await this.apiCall({
            url: 'account',
            method: 'GET',
            params: null,
        });
        return res;
    }

    async changeInfoAccount(params) {
        const res = await this.apiCall({
            url: 'account',
            method: 'POST',
            params: params,
        });
        return res;
    }

    async sentCoin(params) {
        const res = await this.apiCall({
            url: 'transaction/send',
            method: 'POST',
            params: params,
        });
        return res;
    }

    async getBalanceCoin() {
        const res = await this.apiCall({
            url: 'balance',
            method: 'GET',
            params: null
        });
        return res
    }

    async getRecentActivity() {
        const res = await this.apiCall({
            url: 'recent-activity',
            method: 'GET',
            params: null
        });
        return res
    }

    async getAddressWallet() {
        const res = await this.apiCall({
            url: 'wallet-address',
            method: 'GET',
            params: null
        });
        return res
    }

    async getWithdrawFee() {
        const res = await this.apiCall({
            url: 'withdraw-fee',
            method: 'GET',
            params: null
        });
        return res
    }
}

export default new UserServices();
