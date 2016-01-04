'use strict';

export default class UserModel {

    constructor(token, userName) {
        this.token = token || '';
        this.userName = userName ||'';
    }

    initiate(token, username) {
        this.token = token;
        this.userName = username;
    }

    kill() {
        this.setToken('');
    }

    getUserName() {
        return this.userName;
    }

    setUserName(name) {
        this.userName = name;
    }

    getToken() {
        return this.token;
    }

    setToken(token) {
        this.token = token;
    }

};
